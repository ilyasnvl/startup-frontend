import CredentialsProvider from 'next-auth/providers/credentials';
import { u as useTypedBackendConfig, a as useRuntimeConfig, E as ERROR_MESSAGES, d as defu, e as eventHandler, s as sendRedirect, p as parseCookies, g as getHeaders, b as getQuery, c as createError, i as isMethod, r as readBody, f as getRequestHost, h as getRequestProtocol, j as getServerOrigin, k as getResponseHeader, l as setResponseHeader, m as setCookie } from '../../../runtime.mjs';
import { AuthHandler } from 'next-auth/core';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'requrl';

let preparedAuthjsHandler;
let usedSecret;
function NuxtAuthHandler(nuxtAuthOptions) {
  const trustHostUserPreference = useTypedBackendConfig(useRuntimeConfig(), "authjs").trustHost;
  usedSecret = nuxtAuthOptions?.secret;
  if (!usedSecret) {
    {
      throw new Error(ERROR_MESSAGES.NO_SECRET);
    }
  }
  const options = defu(nuxtAuthOptions, {
    secret: usedSecret,
    logger: void 0,
    providers: [],
    // SAFETY: We trust host here because `getRequestURLFromH3Event` is responsible for producing a trusted URL
    trustHost: true,
    // AuthJS uses `/auth` as default, but we rely on `/api/auth` (same as in previous `next-auth`)
    basePath: "/api/auth"
    // Uncomment to enable framework-author specific functionality
    // raw: raw as typeof raw
  });
  if (preparedAuthjsHandler) {
    console.error("You setup the auth handler for a second time - this is likely undesired. Make sure that you only call `NuxtAuthHandler( ... )` once");
  }
  preparedAuthjsHandler = (req) => AuthHandler({ req, options });
  return eventHandler(async (event) => {
    const { res } = event.node;
    const nextRequest = await createRequestForAuthjs(event, trustHostUserPreference);
    const nextResult = await preparedAuthjsHandler(nextRequest);
    if (nextResult.status) {
      res.statusCode = nextResult.status;
    }
    nextResult.cookies?.forEach((cookie) => setCookieDeduped(event, cookie.name, cookie.value, cookie.options));
    nextResult.headers?.forEach((header) => appendHeaderDeduped(event, header.key, header.value));
    if (!nextResult.redirect) {
      return nextResult.body;
    }
    if (nextRequest.body?.json) {
      return { url: nextResult.redirect };
    }
    return await sendRedirect(event, nextResult.redirect);
  });
}
async function createRequestForAuthjs(event, trustHostUserPreference) {
  const nextRequest = {
    host: getRequestURLFromH3Event(event, trustHostUserPreference).origin,
    body: void 0,
    cookies: parseCookies(event),
    query: void 0,
    headers: getHeaders(event),
    method: event.method,
    providerId: void 0,
    error: void 0
  };
  const query = getQuery(event);
  const { action, providerId } = parseActionAndProvider(event);
  const error = query.error;
  if (Array.isArray(error)) {
    throw createError({ statusCode: 400, statusMessage: "Error query parameter can only appear once" });
  }
  const body = isMethod(event, ["PATCH", "POST", "PUT", "DELETE"]) ? await readBody(event) : void 0;
  return {
    ...nextRequest,
    body,
    query,
    action,
    providerId,
    error: error ? String(error) : void 0
  };
}
function getRequestURLFromH3Event(event, trustHost) {
  const path = (event.node.req.originalUrl || event.path).replace(
    /^[/\\]+/g,
    "/"
  );
  const base = getRequestBaseFromH3Event(event, trustHost);
  return new URL(path, base);
}
function getRequestBaseFromH3Event(event, trustHost) {
  if (trustHost) {
    const host = getRequestHost(event, { xForwardedHost: trustHost });
    const protocol = getRequestProtocol(event);
    return `${protocol}://${host}`;
  } else {
    const origin = getServerOrigin(event);
    return origin;
  }
}
const SUPPORTED_ACTIONS = ["providers", "session", "csrf", "signin", "signout", "callback", "verify-request", "error", "_log"];
function parseActionAndProvider({ context }) {
  const params = context.params?._?.split("/");
  if (!params || ![1, 2].includes(params.length)) {
    throw createError({ statusCode: 400, statusMessage: `Invalid path used for auth-endpoint. Supply either one path parameter (e.g., \`/api/auth/session\`) or two (e.g., \`/api/auth/signin/github\` after the base path (in previous examples base path was: \`/api/auth/\`. Received \`${params}\`` });
  }
  const [unvalidatedAction, providerId] = params;
  const action = SUPPORTED_ACTIONS.find((action2) => action2 === unvalidatedAction);
  if (!action) {
    throw createError({ statusCode: 400, statusMessage: `Called endpoint with unsupported action ${unvalidatedAction}. Only the following actions are supported: ${SUPPORTED_ACTIONS.join(", ")}` });
  }
  return { action, providerId };
}
function appendHeaderDeduped(event, name, value) {
  let current = getResponseHeader(event, name);
  if (!current) {
    setResponseHeader(event, name, value);
    return;
  }
  if (!Array.isArray(current)) {
    current = [current.toString()];
  }
  if (current.includes(value)) {
    return;
  }
  current.push(value);
  setResponseHeader(event, name, current);
}
function setCookieDeduped(event, name, value, serializeOptions) {
  let setCookiesHeader = getResponseHeader(event, "set-cookie");
  if (setCookiesHeader) {
    if (!Array.isArray(setCookiesHeader)) {
      setCookiesHeader = [setCookiesHeader.toString()];
    }
    const filterBy = `${name}=`;
    setCookiesHeader = setCookiesHeader.filter((cookie) => !cookie.startsWith(filterBy));
    setResponseHeader(event, "set-cookie", setCookiesHeader);
  }
  setCookie(event, name, value, serializeOptions);
}

const _____ = NuxtAuthHandler({
  secret: process.env.AUTH_SECRET,
  //   providers: [
  //     CredentialsProvider.default({
  //       name: 'Credentials',
  //       credentials: {
  //         email: { label: 'Email Address', type: 'text' },
  //         password: { label: 'Password', type: 'password' },
  //       },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      credentials: {
        email: { label: "Email Address", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        try {
          const res = await fetch("http://localhost:8080/api/v1/sessions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password
            })
          });
          const data = await res.json();
          console.log("Response status:", res.status);
          console.log("Response data:", data);
          if (res.ok && data.data.token) {
            return {
              token: data.data.token,
              email: credentials.email,
              name: data.data.name,
              image_url: data.data.image_url
            };
          } else {
            return null;
          }
        } catch (error) {
          console.error("Error during login:", error);
          return null;
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token;
        token.name = user.name;
        token.image_url = user.image_url;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.name = token.name;
        session.user.image_url = token.image_url;
      }
      session.accessToken = token.accessToken;
      return session;
    }
  },
  pages: {
    signIn: "/login"
    // halaman login
  }
});

export { _____ as default };
//# sourceMappingURL=_..._.mjs.map

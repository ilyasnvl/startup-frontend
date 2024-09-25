import { n as defineEventHandler, r as readBody } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'requrl';

const login_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const response = await $fetch("http://localhost:8080/api/v1/sessions", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  });
  return response;
});

export { login_post as default };
//# sourceMappingURL=login.post.mjs.map

import { _ as _export_sfc, a as useAuth, b as useRouter, c as __nuxt_component_0$1 } from './server.mjs';
import { _ as __nuxt_component_1 } from './nuxt-link-aLGLWbHA.mjs';
import { ref, mergeProps, withCtx, createTextVNode, createVNode, withModifiers, withDirectives, vModelText, withKeys, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'requrl';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    const password = ref("");
    const error = ref("");
    const { signIn } = useAuth();
    const login2 = async () => {
      const response = await signIn("credentials", {
        redirect: false,
        email: email.value,
        password: password.value
      });
      if (response == null ? void 0 : response.error) {
        error.value = "Login gagal. Silakan coba lagi.";
      } else {
        error.value = "";
        useRouter().push("/");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "auth" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form data-v-f4149e8a${_scopeId}><div class="h-screen flex justify-center items-center" data-v-f4149e8a${_scopeId}><div class="hidden md:block lg:w-1/3 bg-white h-full auth-background rounded-tr-lg rounded-br-lg" data-v-f4149e8a${_scopeId}></div><div class="w-auto md:w-2/4 lg:w-2/3 flex justify-center items-center" data-v-f4149e8a${_scopeId}><div class="w-full lg:w-1/2 px-10 lg:px-0" data-v-f4149e8a${_scopeId}><h2 class="font-normal mb-6 text-3xl text-white" data-v-f4149e8a${_scopeId}> Sign In to Your Account </h2><div class="mb-6" data-v-f4149e8a${_scopeId}><div class="mb-4" data-v-f4149e8a${_scopeId}><label class="font-normal text-lg text-white block mb-3" data-v-f4149e8a${_scopeId}>Email Address</label><input type="email" class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100" placeholder="Write your email address here"${ssrRenderAttr("value", email.value)} data-v-f4149e8a${_scopeId}></div></div><div class="mb-6" data-v-f4149e8a${_scopeId}><div class="mb-4" data-v-f4149e8a${_scopeId}><label class="font-normal text-lg text-white block mb-3" data-v-f4149e8a${_scopeId}>Password</label><input type="password" class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100" placeholder="Write your password here"${ssrRenderAttr("value", password.value)} data-v-f4149e8a${_scopeId}></div></div><div class="mb-6" data-v-f4149e8a${_scopeId}><div class="mb-4" data-v-f4149e8a${_scopeId}><button type="submit" class="block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 text-lg rounded-full" data-v-f4149e8a${_scopeId}> Sign In </button>`);
            if (error.value) {
              _push2(`<p data-v-f4149e8a${_scopeId}>${ssrInterpolate(error.value)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="text-center" data-v-f4149e8a${_scopeId}><p class="text-white text-md" data-v-f4149e8a${_scopeId}> Don&#39;t have account? `);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/register",
              class: "no-underline text-orange-button"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Sign Up `);
                } else {
                  return [
                    createTextVNode(" Sign Up ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p></div></div></div></div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(login2, ["prevent"])
              }, [
                createVNode("div", { class: "h-screen flex justify-center items-center" }, [
                  createVNode("div", { class: "hidden md:block lg:w-1/3 bg-white h-full auth-background rounded-tr-lg rounded-br-lg" }),
                  createVNode("div", { class: "w-auto md:w-2/4 lg:w-2/3 flex justify-center items-center" }, [
                    createVNode("div", { class: "w-full lg:w-1/2 px-10 lg:px-0" }, [
                      createVNode("h2", { class: "font-normal mb-6 text-3xl text-white" }, " Sign In to Your Account "),
                      createVNode("div", { class: "mb-6" }, [
                        createVNode("div", { class: "mb-4" }, [
                          createVNode("label", { class: "font-normal text-lg text-white block mb-3" }, "Email Address"),
                          withDirectives(createVNode("input", {
                            type: "email",
                            class: "auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100",
                            placeholder: "Write your email address here",
                            "onUpdate:modelValue": ($event) => email.value = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, email.value]
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "mb-6" }, [
                        createVNode("div", { class: "mb-4" }, [
                          createVNode("label", { class: "font-normal text-lg text-white block mb-3" }, "Password"),
                          withDirectives(createVNode("input", {
                            onKeyup: withKeys(login2, ["enter"]),
                            type: "password",
                            class: "auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100",
                            placeholder: "Write your password here",
                            "onUpdate:modelValue": ($event) => password.value = $event
                          }, null, 40, ["onUpdate:modelValue"]), [
                            [vModelText, password.value]
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "mb-6" }, [
                        createVNode("div", { class: "mb-4" }, [
                          createVNode("button", {
                            type: "submit",
                            class: "block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 text-lg rounded-full"
                          }, " Sign In "),
                          error.value ? (openBlock(), createBlock("p", { key: 0 }, toDisplayString(error.value), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "text-center" }, [
                        createVNode("p", { class: "text-white text-md" }, [
                          createTextVNode(" Don't have account? "),
                          createVNode(_component_NuxtLink, {
                            to: "/register",
                            class: "no-underline text-orange-button"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Sign Up ")
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ])
                  ])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f4149e8a"]]);

export { login as default };
//# sourceMappingURL=login-Jh6RYREq.mjs.map

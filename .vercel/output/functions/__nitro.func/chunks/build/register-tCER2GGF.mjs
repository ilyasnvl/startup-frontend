import { _ as _export_sfc, a as useAuth, c as __nuxt_component_0$1 } from './server.mjs';
import { _ as __nuxt_component_1 } from './nuxt-link-aLGLWbHA.mjs';
import { ref, mergeProps, withCtx, createTextVNode, createVNode, withModifiers, withDirectives, vModelText, withKeys, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
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

const _sfc_main = {
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    const form = ref({
      name: "",
      occupation: "",
      email: "",
      password: ""
    });
    const errorMessage = ref("");
    const router = useRouter();
    const { signIn } = useAuth();
    const register2 = async () => {
      try {
        const response = await $fetch("http://localhost:8080/api/v1/users", {
          method: "POST",
          body: JSON.stringify({
            name: form.value.name,
            occupation: form.value.occupation,
            email: form.value.email,
            password: form.value.password
          }),
          headers: {
            "Content-Type": "application/json"
          }
        });
        console.log("register response", response);
        if (response && response.meta.status === "success") {
          const signInResponse = await signIn("credentials", {
            email: form.value.email,
            password: form.value.password,
            redirect: false
          });
          console.log("SignIn response:", signInResponse);
          if (signInResponse && !signInResponse.error) {
            sessionStorage.setItem("token", signInResponse.token);
            try {
              await router.push({
                path: "/upload",
                query: {
                  name: form.value.name
                }
              });
              console.log("Redirect successful");
            } catch (routerError) {
              console.error("Router push failed:", routerError);
              errorMessage.value = "Terjadi kesalahan saat melakukan redirect.";
            }
          } else {
            errorMessage.value = signInResponse.error || "Sign in gagal. Silakan coba lagi.";
          }
        } else {
          errorMessage.value = response.message || "Registrasi gagal. Silakan coba lagi.";
        }
      } catch (error) {
        errorMessage.value = "Terjadi kesalahan. Silakan coba lagi.";
        console.error("Registrasi gagal:", error);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0$1;
      const _component_NuxtLink = __nuxt_component_1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "auth" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form data-v-d2b27882${_scopeId}><div class="h-screen flex justify-center items-center" data-v-d2b27882${_scopeId}><div class="hidden md:block lg:w-1/3 bg-white h-full auth-background rounded-tr-lg rounded-br-lg" data-v-d2b27882${_scopeId}></div><div class="w-auto md:w-2/4 lg:w-2/3 flex justify-center items-center" data-v-d2b27882${_scopeId}><div class="w-full lg:w-1/2 px-10 lg:px-0" data-v-d2b27882${_scopeId}><h2 class="font-normal mb-6 text-3xl text-white" data-v-d2b27882${_scopeId}> Sign Up Account </h2><div class="mb-6" data-v-d2b27882${_scopeId}><div class="mb-4" data-v-d2b27882${_scopeId}><label class="font-normal text-lg text-white block mb-3" data-v-d2b27882${_scopeId}>Full Name</label><input type="text" class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100" placeholder="Write Your Name Here"${ssrRenderAttr("value", form.value.name)} data-v-d2b27882${_scopeId}></div></div><div class="mb-6" data-v-d2b27882${_scopeId}><div class="mb-4" data-v-d2b27882${_scopeId}><label class="font-normal text-lg text-white block mb-3" data-v-d2b27882${_scopeId}>Occupation</label><input type="text" class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100" placeholder="Write your occupation here"${ssrRenderAttr("value", form.value.occupation)} data-v-d2b27882${_scopeId}></div></div><div class="mb-6" data-v-d2b27882${_scopeId}><div class="mb-4" data-v-d2b27882${_scopeId}><label class="font-normal text-lg text-white block mb-3" data-v-d2b27882${_scopeId}>Email Address</label><input type="email" class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100" placeholder="Write your email address here"${ssrRenderAttr("value", form.value.email)} data-v-d2b27882${_scopeId}></div></div><div class="mb-6" data-v-d2b27882${_scopeId}><div class="mb-4" data-v-d2b27882${_scopeId}><label class="font-normal text-lg text-white block mb-3" data-v-d2b27882${_scopeId}>Password</label><input type="password" class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100" placeholder="Type your password here"${ssrRenderAttr("value", form.value.password)} data-v-d2b27882${_scopeId}></div></div><div class="mb-6" data-v-d2b27882${_scopeId}><div class="mb-4" data-v-d2b27882${_scopeId}><button type="submit" class="block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 text-lg rounded-full" data-v-d2b27882${_scopeId}> Continue Sign Up </button></div></div><div class="text-center" data-v-d2b27882${_scopeId}><p class="text-white text-md" data-v-d2b27882${_scopeId}> Already have account? `);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/login",
              class: "no-underline text-orange-button"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Sign In `);
                } else {
                  return [
                    createTextVNode(" Sign In ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`. </p></div></div></div></div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(register2, ["prevent"])
              }, [
                createVNode("div", { class: "h-screen flex justify-center items-center" }, [
                  createVNode("div", { class: "hidden md:block lg:w-1/3 bg-white h-full auth-background rounded-tr-lg rounded-br-lg" }),
                  createVNode("div", { class: "w-auto md:w-2/4 lg:w-2/3 flex justify-center items-center" }, [
                    createVNode("div", { class: "w-full lg:w-1/2 px-10 lg:px-0" }, [
                      createVNode("h2", { class: "font-normal mb-6 text-3xl text-white" }, " Sign Up Account "),
                      createVNode("div", { class: "mb-6" }, [
                        createVNode("div", { class: "mb-4" }, [
                          createVNode("label", { class: "font-normal text-lg text-white block mb-3" }, "Full Name"),
                          withDirectives(createVNode("input", {
                            type: "text",
                            class: "auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100",
                            placeholder: "Write Your Name Here",
                            "onUpdate:modelValue": ($event) => form.value.name = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, form.value.name]
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "mb-6" }, [
                        createVNode("div", { class: "mb-4" }, [
                          createVNode("label", { class: "font-normal text-lg text-white block mb-3" }, "Occupation"),
                          withDirectives(createVNode("input", {
                            type: "text",
                            class: "auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100",
                            placeholder: "Write your occupation here",
                            "onUpdate:modelValue": ($event) => form.value.occupation = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, form.value.occupation]
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "mb-6" }, [
                        createVNode("div", { class: "mb-4" }, [
                          createVNode("label", { class: "font-normal text-lg text-white block mb-3" }, "Email Address"),
                          withDirectives(createVNode("input", {
                            type: "email",
                            class: "auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100",
                            placeholder: "Write your email address here",
                            "onUpdate:modelValue": ($event) => form.value.email = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, form.value.email]
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "mb-6" }, [
                        createVNode("div", { class: "mb-4" }, [
                          createVNode("label", { class: "font-normal text-lg text-white block mb-3" }, "Password"),
                          withDirectives(createVNode("input", {
                            onKeyup: withKeys(register2, ["enter"]),
                            type: "password",
                            class: "auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100",
                            placeholder: "Type your password here",
                            "onUpdate:modelValue": ($event) => form.value.password = $event
                          }, null, 40, ["onUpdate:modelValue"]), [
                            [vModelText, form.value.password]
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "mb-6" }, [
                        createVNode("div", { class: "mb-4" }, [
                          createVNode("button", {
                            type: "submit",
                            class: "block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 text-lg rounded-full"
                          }, " Continue Sign Up ")
                        ])
                      ]),
                      createVNode("div", { class: "text-center" }, [
                        createVNode("p", { class: "text-white text-md" }, [
                          createTextVNode(" Already have account? "),
                          createVNode(_component_NuxtLink, {
                            to: "/login",
                            class: "no-underline text-orange-button"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Sign In ")
                            ]),
                            _: 1
                          }),
                          createTextVNode(". ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const register = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d2b27882"]]);

export { register as default };
//# sourceMappingURL=register-tCER2GGF.mjs.map

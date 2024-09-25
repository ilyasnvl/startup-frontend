import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'requrl';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = publicAssetsURL("/success-illustration.svg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto h-screen flex justify-center items-center" }, _attrs))}><div class="w-full lg:w-1/3 px-10 lg:px-0"><div class="flex justify-center items-center mx-auto mt-6 mb-8"><img${ssrRenderAttr("src", _imports_0)} alt="" class="w-full"></div><h2 class="font-medium mb-3 text-3xl text-center"> Welcome onboard! </h2><p class="text-center font-light"> Your account just registered <br> into our system </p><div class="mb-4 mt-6"><div class="mb-3"><button class="block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 text-lg rounded-full"> Start Explore </button></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register-success.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const registerSuccess = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { registerSuccess as default };
//# sourceMappingURL=register-success-Dh8TK0mg.mjs.map

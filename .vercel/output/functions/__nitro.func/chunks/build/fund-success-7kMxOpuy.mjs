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

const _imports_0 = publicAssetsURL("/funded-illustration.svg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto h-screen flex justify-center items-center" }, _attrs))}><div class="w-full lg:w-1/3 px-10 lg:px-0"><div class="flex justify-center items-center mx-auto mt-6 mb-8"><img${ssrRenderAttr("src", _imports_0)} alt="" class="w-full"></div><h2 class="font-medium mb-3 text-3xl text-center"> Yeay! You are super </h2><p class="text-center font-light"> Your money has ben transferred <br> into company&#39;s account </p><div class="mb-4 mt-6"><div class="mb-3"><button class="block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 text-lg rounded-full"> Fund Other Project </button></div><div class="mb-4"><button class="block w-full bg-transparent border border-gray-500 text-gray-500 hover:bg-green-button hover:border-green-button hover:text-white font-light px-6 py-4 text-lg rounded-full"> My Dashboard </button></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/fund-success.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const fundSuccess = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { fundSuccess as default };
//# sourceMappingURL=fund-success-7kMxOpuy.mjs.map

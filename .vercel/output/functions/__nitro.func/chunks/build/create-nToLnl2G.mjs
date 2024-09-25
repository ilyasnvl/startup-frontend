import { _ as __nuxt_component_0, a as __nuxt_component_2 } from './Footer-Du6eXBPh.mjs';
import { _ as __nuxt_component_1 } from './nuxt-link-aLGLWbHA.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../routes/renderer.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Navbar = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_1;
  const _component_Footer = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "project-page" }, _attrs))}><section class="dashboard-header pt-5"><div class="container mx-auto relative">`);
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  _push(`</div></section><section class="container mx-auto pt-8"><div class="flex justify-between items-center"><div class="w-full mr-6"><h2 class="text-4xl text-gray-900 mb-2 font-medium">Dashboard</h2></div></div><div class="flex justify-between items-center"><div class="w-3/4 mr-6"><h3 class="text-2xl text-gray-900 mb-4">Create New Projects</h3></div><div class="w-1/4 text-right">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/dashboard/projects/1",
    class: "bg-green-button hover:bg-green-button text-white font-bold px-4 py-1 rounded inline-flex items-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Save `);
      } else {
        return [
          createTextVNode(" Save ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="block mb-2"><div class="w-full lg:max-w-full lg:flex mb-4"><div class="w-full border border-gray-400 bg-white rounded p-8 flex flex-col justify-between leading-normal"><form class="w-full"><div class="flex flex-wrap -mx-3 mb-6"><div class="w-full md:w-1/2 px-3 mb-6 md:mb-0"><label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Campaign Name </label><input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Contoh: Demi Gunpla Demi Istri"></div><div class="w-full md:w-1/2 px-3"><label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Price </label><input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" placeholder="Contoh: 200000"></div><div class="w-full px-3"><label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3"> Short Description </label><input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Deskripsi singkat mengenai projectmu"></div><div class="w-full px-3"><label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> What will backers get </label><input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Contoh: Ayam, Nasi Goreng, Piring"></div><div class="w-full px-3"><label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"> Description </label><textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Isi deskripsi panjang untuk projectmu"></textarea></div></div></form></div></div></div></section><div class="cta-clip -mt-20"></div><section class="call-to-action bg-purple-progress pt-64 pb-10"></section>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/projects/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const create = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { create as default };
//# sourceMappingURL=create-nToLnl2G.mjs.map

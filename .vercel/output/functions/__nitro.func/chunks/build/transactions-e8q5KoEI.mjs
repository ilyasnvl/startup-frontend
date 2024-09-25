import { _ as __nuxt_component_0, a as __nuxt_component_2 } from './Footer-Du6eXBPh.mjs';
import { _ as __nuxt_component_1 } from './nuxt-link-aLGLWbHA.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
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
  _push(`</div></section><section class="container mx-auto pt-8"><div class="flex justify-between items-center mb-6"><div class="w-3/4 mr-6"><h2 class="text-4xl text-gray-900 mb-2 font-medium">Dashboard</h2><ul class="flex mt-2"><li class="mr-6">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "text-gray-500 hover:text-gray-800",
    to: "/dashboard"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Your Projects `);
      } else {
        return [
          createTextVNode(" Your Projects ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="mr-6">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "text-gray-800 font-bold",
    to: "/dashboard/transactions"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Your Transactions `);
      } else {
        return [
          createTextVNode(" Your Transactions ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div><hr><div class="block mb-2"><!--[-->`);
  ssrRenderList(5, (i) => {
    _push(`<div class="w-full lg:max-w-full lg:flex mb-4"><div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="${ssrRenderStyle({ "background-color": "#bbb" })}"></div><div class="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-8 flex flex-col justify-between leading-normal"><div><div class="text-gray-900 font-bold text-xl mb-1"> Cari Uang Buat Gunpla </div><p class="text-sm text-gray-600 flex items-center mb-2"> Rp. 200.000.000 \xB7 12 September 2020 </p></div></div></div>`);
  });
  _push(`<!--]--></div></section><div class="cta-clip -mt-20"></div><section class="call-to-action bg-purple-progress pt-64 pb-10"></section>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/transactions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const transactions = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { transactions as default };
//# sourceMappingURL=transactions-e8q5KoEI.mjs.map

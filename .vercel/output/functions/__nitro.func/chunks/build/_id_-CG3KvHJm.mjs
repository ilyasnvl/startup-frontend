import { _ as __nuxt_component_0, a as __nuxt_component_2 } from './Footer-Du6eXBPh.mjs';
import { _ as __nuxt_component_1 } from './nuxt-link-aLGLWbHA.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'requrl';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = publicAssetsURL("/project-slider-1.jpg");
const _imports_1 = publicAssetsURL("/project-slider-2.jpg");
const _imports_2 = publicAssetsURL("/project-slider-3.jpg");
const _imports_3 = publicAssetsURL("/project-slider-4.jpg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Navbar = __nuxt_component_0;
  const _component_nuxt_link = __nuxt_component_1;
  const _component_Footer = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "project-page" }, _attrs))}><section class="dashboard-header pt-5"><div class="container mx-auto relative">`);
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  _push(`</div></section><section class="container mx-auto pt-8"><div class="flex justify-between items-center"><div class="w-full mr-6"><h2 class="text-4xl text-gray-900 mb-2 font-medium">Dashboard</h2></div></div><div class="flex justify-between items-center"><div class="w-3/4 mr-6"><h3 class="text-2xl text-gray-900 mb-4">Campaign Details</h3></div><div class="w-1/4 text-right">`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: "/dashboard/projects/create",
    class: "bg-green-button hover:bg-green-button text-white font-bold px-4 py-1 rounded inline-flex items-center"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Edit `);
      } else {
        return [
          createTextVNode(" Edit ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="block mb-2"><div class="w-full lg:max-w-full lg:flex mb-4"><div class="border border-gray-400 bg-white rounded p-8 flex flex-col justify-between leading-normal"><div><div class="text-gray-900 font-bold text-xl mb-2"> Cari Uang Buat Gunpla </div><p class="text-sm font-bold flex items-center mb-1"> Description </p><p class="text-gray-700 text-base"> Designed to fit your dedicated typing experience. No matter what you like, linear, clicky or a little in between, we\u2019ve got you covered with three Gateron switches options (Blue, Brown, Red). With a lifespan of 50 million keystroke lifespan we want to make sure that you experience same feedback for every keystroke. </p><p class="text-gray-700 text-base"> With N-key rollover (NKRO on wired mode only) you can register as many keys as you can press at once without missing out characters. It allows to use all the same media keys as conventional macOS. </p><p class="text-sm font-bold flex items-center mb-1 mt-4"> What Will Funders Get </p><ul class="list-disc ml-5"><li>Equity of the startup directly from the founder</li><li>Special service or product that startup has</li><li> You can also sell your equity once the startup going IPO </li></ul><p class="text-sm font-bold flex items-center mb-1 mt-4"> Price </p><p class="text-4xl text-gray-700 text-base">200.000</p></div></div></div></div><div class="flex justify-between items-center"><div class="w-3/4 mr-6"><h3 class="text-2xl text-gray-900 mb-4 mt-5">Gallery</h3></div><div class="w-1/4 text-right"><a href="#" class="bg-green-button hover:bg-green-button text-white font-bold px-4 py-1 rounded inline-flex items-center"> Upload </a></div></div><div class="flex -mx-2"><div class="relative w-1/4 bg-white m-2 p-2 border border-gray-400 rounded"><figure class="item-thumbnail"><img${ssrRenderAttr("src", _imports_0)} alt="" class="rounded w-full"></figure></div><div class="relative w-1/4 bg-white m-2 p-2 border border-gray-400 rounded"><figure class="item-thumbnail"><img${ssrRenderAttr("src", _imports_1)} alt="" class="rounded w-full"></figure></div><div class="relative w-1/4 bg-white m-2 p-2 border border-gray-400 rounded"><figure class="item-thumbnail"><img${ssrRenderAttr("src", _imports_2)} alt="" class="rounded w-full"></figure></div><div class="relative w-1/4 bg-white m-2 p-2 border border-gray-400 rounded"><figure class="item-thumbnail"><img${ssrRenderAttr("src", _imports_3)} alt="" class="rounded w-full"></figure></div></div><div class="flex justify-between items-center"><div class="w-3/4 mr-6"><h3 class="text-2xl text-gray-900 mb-4 mt-5"> Transaction History </h3></div></div><div class="block mb-2"><div class="w-full lg:max-w-full lg:flex mb-4"><div class="w-full border border-gray-400 lg:border-gray-400 bg-white rounded p-8 flex flex-col justify-between leading-normal"><div><div class="text-gray-900 font-bold text-xl mb-1"> Galih Pratama </div><p class="text-sm text-gray-600 flex items-center mb-2"> Rp. 200.000 \xB7 12 September 2020 </p></div></div></div></div></section><div class="cta-clip -mt-20"></div><section class="call-to-action bg-purple-progress pt-64 pb-10"></section>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/projects/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _id_ as default };
//# sourceMappingURL=_id_-CG3KvHJm.mjs.map

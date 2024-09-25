import { _ as __nuxt_component_0, a as __nuxt_component_2 } from './Footer-Du6eXBPh.mjs';
import { u as useAsyncData, _ as __nuxt_component_1 } from './asyncData-B9VlqoOt.mjs';
import { u as useRuntimeConfig } from './server.mjs';
import { withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import './nuxt-link-aLGLWbHA.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'requrl';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

const _imports_0 = publicAssetsURL("/hero-image@2x.png");
const _imports_1 = publicAssetsURL("/line-step.svg");
const _imports_2 = publicAssetsURL("/step-1-illustration.svg");
const _imports_3 = publicAssetsURL("/step-2-illustration.svg");
const _imports_4 = publicAssetsURL("/step-3-illustration.svg");
const _imports_5 = publicAssetsURL("/testimonial-line.svg");
const _imports_6 = publicAssetsURL("/testimonial-1-icon.png");
const _imports_7 = publicAssetsURL("/testimonial-2-icon.png");
const _imports_8 = publicAssetsURL("/testimonial-3-icon.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: campaigns, error } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "campaigns",
      () => $fetch("/api/v1/campaigns", {
        baseURL: useRuntimeConfig().public.baseURL
      })
    )), __temp = await __temp, __restore(), __temp);
    if (error.value) {
      console.error("Error fetching campaigns:", error.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = __nuxt_component_0;
      const _component_CallToAction = __nuxt_component_1;
      const _component_Footer = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "landing-page" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(`<section class="landing-hero pt-5"><div class="header__bg"></div><div class="container mx-auto relative flex items-center px-20"><div class="flex items-center pt-10 px-5 md:px-0"><div class="w-1/2"><h1 class="text-4xl text-white mb-5"> We helps <u class="hero-underline">startup</u> to <br> getting started &amp; <u class="hero-underline">funding</u> <br> their truly needs </h1><p class="text-white text-xl font-light mb-8"> Fund the best idea to become <br> a real product and be the contributor </p><button class="block bg-orange-button hover:bg-green-button text-white font-semibold px-12 py-3 text-xl rounded-full"> Find a Project </button></div><div class="w-1/2 flex justify-center"><img${ssrRenderAttr("src", _imports_0)} alt="crowdfunding project"></div></div></div></section><section class="container mx-auto pt-24 px-20"><div class="flex justify-between items-center mb-10"><div class="w-auto"><h2 class="text-3xl text-gray-900 mb-8"> Only 3 steps to execute <br> your bright ideas </h2></div></div><div class="flex"><div class="w-full px-56 mb-5"><img${ssrRenderAttr("src", _imports_1)} alt="" class="w-full"></div></div><div class="flex justify-between items-center text-center"><div class="w-1/3"><figure class="flex justify-center items-center"><img${ssrRenderAttr("src", _imports_2)} alt="" class="h-30 mb-8"></figure><div class="step-content"><h3 class="font-medium">Sign Up</h3><p class="font-light"> Sign Up account and start <br>funding project </p></div></div><div class="w-1/3"><figure class="flex justify-center items-center -mt-24"><img${ssrRenderAttr("src", _imports_3)} alt="" class="h-30 mb-8"></figure><div class="step-content"><h3 class="font-medium">Open Project</h3><p class="font-light"> Choose some project idea, <br> and start funding </p></div></div><div class="w-1/3"><figure class="flex justify-center items-center -mt-48"><img${ssrRenderAttr("src", _imports_4)} alt="" class="h-30 mb-8"></figure><div class="step-content"><h3 class="font-medium">Execute</h3><p class="font-light"> Time to makes dream <br> comes true </p></div></div></div></section><section class="container mx-auto pt-24 px-20"><div class="flex justify-between items-center"><div class="w-auto"><h2 class="text-3xl text-gray-900 mb-8"> New projects you can <br> taken care of </h2></div><div class="w-auto mt-5"><a class="text-gray-900 hover:underline text-md font-medium" href="">View All</a></div></div><div class="grid grid-cols-3 gap-4 mt-3"><!--[-->`);
      ssrRenderList(unref(campaigns).data, (campaign) => {
        _push(`<div class="card-project w-full p-5 border border-gray-500 rounded-20"><div class="item"><figure class="item-image"><img${ssrRenderAttr("src", ("useRuntimeConfig" in _ctx ? _ctx.useRuntimeConfig : unref(useRuntimeConfig))().public.baseURL + "/" + campaign.image_url)} alt="" class="card-image rounded-20 w-full"></figure><div class="item-meta"><h4 class="text-3xl font-medium text-gray-900 mt-5">${ssrInterpolate(campaign.name)}</h4><p class="text-md font-light text-gray-900 h-12">${ssrInterpolate(campaign.short_description)}</p><div class="relative pt-4 progress-bar"><div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 h-3 rounded-lg"><div style="${ssrRenderStyle("width: " + campaign.current_amount / campaign.goal_amount * 100 + "%")}" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-progress progress-striped"></div></div></div><div class="flex progress-info"><div>${ssrInterpolate(campaign.current_amount / campaign.goal_amount * 100)}%</div><div class="ml-auto font-semibold">Rp. ${ssrInterpolate(new Intl.NumberFormat().format(campaign.goal_amount))}</div></div></div><button class="text-center mt-5 button-cta block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-2 text-lg rounded-full"> Fund Now </button></div></div>`);
      });
      _push(`<!--]--></div></section><section class="container mx-auto pt-24 px-20"><div class="flex justify-between items-center"><div class="w-auto"><h2 class="text-3xl text-gray-900 mb-8"> See What Our <br> Happy Clients Say </h2></div></div><div class="flex mb-10"><div class="w-2/12 flex justify-center items-start"><img${ssrRenderAttr("src", _imports_5)} alt=""></div><div class="w-8/12 mt-16"><h2 class="text-3xl text-gray-900 font-light"> \u201CFunding at Bucker is very easy and comfortable. <br> Just need to find an idea, click and already funding.\u201D </h2><div class="testimonial-info mt-8"><div class="name text-xl font-semibold">Shopie Nicole</div><div class="title text-xl font-light text-gray-400"> Project Manager </div></div><div class="testimonial-icon mt-10"><img${ssrRenderAttr("src", _imports_6)} alt="" class="w-20 mr-5 inline-block testimonial-user rounded-full"><img${ssrRenderAttr("src", _imports_7)} alt="" class="w-20 mr-5 inline-block testimonial-user rounded-full"><img${ssrRenderAttr("src", _imports_8)} alt="" class="w-20 mr-5 inline-block testimonial-user active rounded-full"></div></div><div class="w-2/12"></div></div></section><div class="cta-clip -mt-20"></div>`);
      _push(ssrRenderComponent(_component_CallToAction, null, null, _parent));
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-3i8g9y1q.mjs.map

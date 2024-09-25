import { _ as __nuxt_component_0, a as __nuxt_component_2 } from './Footer-Du6eXBPh.mjs';
import { u as useAsyncData, _ as __nuxt_component_1 } from './asyncData-B9VlqoOt.mjs';
import { d as useRoute, a as useAuth, u as useRuntimeConfig } from './server.mjs';
import { withAsyncContext, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import './nuxt-link-aLGLWbHA.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { status } = useAuth();
    const { data: session } = useAuth();
    const campaignId = route.params.id;
    const { data: campaign } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "campaign",
      () => fetch("http://localhost:8080/api/v1/campaigns/" + campaignId, {
        baseURL: useRuntimeConfig().public.baseURL
      }).then((res) => res.json())
    )), __temp = await __temp, __restore(), __temp);
    console.log(campaign.value.data);
    const defaultImage = ref("");
    const transactions = ref({
      amount: "",
      campaign_id: Number.parseInt(campaignId)
    });
    console.log("access token:: ", session.value.accessToken);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = __nuxt_component_0;
      const _component_CallToAction = __nuxt_component_1;
      const _component_Footer = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "project-page" }, _attrs))}><section class="project-header pt-5"><div class="container mx-auto relative">`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(`</div></section><section class="container project-container mx-auto -mt-56"><div class="flex mt-3"><div class="w-3/4 mr-6"><div class="bg-white p-3 mb-3 border border-gray-400 rounded-20"><figure class="item-image"><img${ssrRenderAttr("src", unref(defaultImage))} alt="" class="rounded-20 w-full"></figure></div><div class="flex -mx-2"><!--[-->`);
      ssrRenderList(unref(campaign).data.images, (image) => {
        _push(`<div class="relative w-1/4 bg-white m-2 p-2 border border-gray-400 rounded-20"><figure class="item-thumbnail cursor-pointer"><img${ssrRenderAttr("src", ("useRuntimeConfig" in _ctx ? _ctx.useRuntimeConfig : unref(useRuntimeConfig))().public.baseURL + "/" + image.image_url)} alt="" class="rounded-20 w-full"></figure></div>`);
      });
      _push(`<!--]--></div></div><div class="w-1/4"><div class="bg-white w-full p-5 border border-gray-400 rounded-20 sticky" style="${ssrRenderStyle({ "top": "15px" })}"><h3>Project Leader:</h3><div class="flex mt-3"><div class="w-1/4"><img${ssrRenderAttr("src", ("useRuntimeConfig" in _ctx ? _ctx.useRuntimeConfig : unref(useRuntimeConfig))().public.baseURL + "/" + unref(campaign).data.user.image_url)} alt="" class="w-full inline-block rounded-full"></div><div class="w-3/4 ml-5 mt-1"><div class="font-semibold text-xl text-gray-800">${ssrInterpolate(unref(campaign).data.user.name)}</div><div class="font-light text-md text-gray-400">${ssrInterpolate(unref(campaign).data.backer_count)}</div></div></div><h4 class="mt-5 font-semibold">What will you get:</h4><ul class="list-check mt-3"><!--[-->`);
      ssrRenderList(unref(campaign).data.perks, (perk) => {
        _push(`<li>${ssrInterpolate(perk)}</li>`);
      });
      _push(`<!--]--></ul>`);
      if (unref(status) === "authenticated") {
        _push(`<form><input type="number" class="border border-gray-500 block w-full px-6 py-3 mt-4 rounded-full text-gray-800 transition duration-300 ease-in-out focus:outline-none focus:shadow-outline" placeholder="Amount in Rp"${ssrRenderAttr("value", unref(transactions).amount)}><button type="submit" class="text-center mt-3 button-cta block w-full bg-orange-button hover:bg-green-button text-white font-medium px-6 py-3 text-md rounded-full"> Fund Now </button></form>`);
      } else {
        _push(`<button class="mt-3 button-cta block w-full bg-orange-button hover:bg-green-button text-white font-medium px-6 py-3 text-md rounded-full"> Sign in to Fund </button>`);
      }
      _push(`</div></div></div></section><section class="container mx-auto pt-8"><div class="flex justify-between items-center"><div class="w-full md:w-3/4 mr-6"><h2 class="text-4xl text-gray-900 mb-2 font-medium">${ssrInterpolate(unref(campaign).data.name)}</h2><p class="font-light text-xl mb-5">${ssrInterpolate(unref(campaign).data.short_description)}</p><div class="relative progress-bar"><div class="overflow-hidden mb-4 text-xs flex rounded-full bg-gray-200 h-6"><div style="${ssrRenderStyle(
        "width: " + unref(campaign).data.current_amount / unref(campaign).data.goal_amount * 100 + "%"
      )}" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-progress progress-striped"></div></div></div><div class="flex progress-info mb-6"><div class="text-2xl">${ssrInterpolate(unref(campaign).data.current_amount / unref(campaign).data.goal_amount * 100)}% </div><div class="ml-auto font-semibold text-2xl"> Rp. ${ssrInterpolate(new Intl.NumberFormat().format(unref(campaign).data.goal_amount))}</div></div><p class="font-light text-xl mb-5">${ssrInterpolate(unref(campaign).data.description)}</p></div><div class="w-1/4 hidden md:block"></div></div></section><div class="cta-clip -mt-20"></div>`);
      _push(ssrRenderComponent(_component_CallToAction, null, null, _parent));
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-J3KzT3f2.mjs.map

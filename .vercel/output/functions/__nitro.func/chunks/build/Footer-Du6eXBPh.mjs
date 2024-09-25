import { _ as __nuxt_component_1 } from './nuxt-link-aLGLWbHA.mjs';
import { _ as _export_sfc, a as useAuth, u as useRuntimeConfig } from './server.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';

const _imports_0$1 = publicAssetsURL("/logo.svg");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const { status, data, signOut, signIn, getSession } = useAuth();
    console.log();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_NuxtLink = __nuxt_component_1;
      const _component_nuxt_link = __nuxt_component_1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-50 bg-blue-700 py-3 flex items-center" }, _attrs))} data-v-09a2c91c><div class="container mx-auto flex items-center" data-v-09a2c91c><div style="${ssrRenderStyle({ "height": "54px" })}" class="pr-5" data-v-09a2c91c><img${ssrRenderAttr("src", _imports_0$1)} alt="logo" class="h-full" data-v-09a2c91c></div><ul class="flex items-center" data-v-09a2c91c><li data-v-09a2c91c>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-white hover:text-teal-500 text-lg px-4 py-3",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-09a2c91c><a class="text-white hover:text-teal-500 text-lg px-4 py-3" href="/projects.html" data-v-09a2c91c>Project</a></li><li data-v-09a2c91c><a class="text-white hover:text-teal-500 text-lg px-4 py-3" href="/features.html" data-v-09a2c91c>Features</a></li><li data-v-09a2c91c><a class="text-white hover:text-teal-500 text-lg px-4 py-3" href="/story.html" data-v-09a2c91c>Success Stories</a></li></ul>`);
      if (unref(status) !== "authenticated") {
        _push(`<ul class="flex ml-auto items-center mt-2" data-v-09a2c91c><li data-v-09a2c91c>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/register",
          class: "inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full mr-4"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Sign Up `);
            } else {
              return [
                createTextVNode(" Sign Up ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-09a2c91c>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/login",
          class: "inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` My Account `);
            } else {
              return [
                createTextVNode(" My Account ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></ul>`);
      } else {
        _push(`<div class="flex ml-auto" data-v-09a2c91c><div class="dropdown inline-block relative z-10" data-v-09a2c91c><button class="inline-block bg-transparent hover:bg-white hover:bg-opacity-25 text-white font-semibold py-4 px-6 rounded inline-flex items-center" data-v-09a2c91c>`);
        if ((_b = (_a = unref(data)) == null ? void 0 : _a.user) == null ? void 0 : _b.image_url) {
          _push(`<img${ssrRenderAttr("src", ("useRuntimeConfig" in _ctx ? _ctx.useRuntimeConfig : unref(useRuntimeConfig))().public.baseURL + "/" + unref(data).user.image_url)} alt="" class="h-8 rounded-full mr-2" data-v-09a2c91c>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="ml-2" data-v-09a2c91c>${ssrInterpolate((_d = (_c = unref(data)) == null ? void 0 : _c.user) == null ? void 0 : _d.name)}</span><svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" data-v-09a2c91c><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" data-v-09a2c91c></path></svg></button><ul class="dropdown-menu absolute hidden text-white pt-1 shadow w-full -mt-2" data-v-09a2c91c><li class="" data-v-09a2c91c>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "bg-blue-700 hover:bg-gray-100 hover:text-orange-500 py-2 px-4 block whitespace-no-wrap",
          to: "/dashboard"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`My Dashboard`);
            } else {
              return [
                createTextVNode("My Dashboard")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li class="" data-v-09a2c91c>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          class: "bg-blue-700 hover:bg-gray-100 border-t hover:text-orange-500 py-2 px-4 block whitespace-no-wrap",
          to: "/dashboard"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Account Settings`);
            } else {
              return [
                createTextVNode("Account Settings")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li class="" data-v-09a2c91c><a class="cursor-pointer rounded-b bg-blue-700 hover:bg-gray-100 border-t hover:text-orange-500 py-2 px-4 block whitespace-no-wrap" data-v-09a2c91c>Logout</a></li></ul></div></div>`);
      }
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-09a2c91c"]]);
const _imports_0 = publicAssetsURL("/logo-footer.svg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-purple-progress py-20 text-white text-lg" }, _attrs))}><div class="container mx-auto px-20"><div class="sm:flex mb-4"><div class="sm:w-1/2 sm:mt-0 mt-8 h-auto"><img${ssrRenderAttr("src", _imports_0)} alt="" class="mb-3"><p class="font-light"> Helps people execute their <br>bright ideas </p></div><div class="sm:w-1/4 h-auto"><div class="mb-8 font-bold">Explore</div><ul class="font-light"><li class="mb-3">Our Services</li><li class="mb-3">Equity System</li><li class="mb-3">Refund</li><li class="mb-3">Shareholder</li></ul></div><div class="sm:w-1/4 h-auto"><div class="mb-8 font-bold">Investor</div><ul class="font-light"><li class="mb-3">My Account</li><li class="mb-3">Top Startups</li><li class="mb-3">How-to Tutorials</li><li class="mb-3">Withdrawl</li></ul></div><div class="sm:w-1/4 h-auto"><div class="mb-8 font-bold">Office</div><ul class="font-light"><li class="mb-3">+021 2208 1996</li><li class="mb-3">KBP, Bandung</li><li class="mb-3">No.12 (Backer)</li><li class="mb-3">support@backer.id</li></ul></div></div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _, __nuxt_component_2 as a };
//# sourceMappingURL=Footer-Du6eXBPh.mjs.map

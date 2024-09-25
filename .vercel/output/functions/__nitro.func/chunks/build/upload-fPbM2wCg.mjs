import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { b as useRouter, a as useAuth } from './server.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
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

const _imports_0 = publicAssetsURL("/icon-avatar-add.svg");
const _sfc_main = {
  __name: "upload",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const avatarUrl = ref("");
    ref(null);
    const userName = router.currentRoute.value.query.name;
    useAuth();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto h-screen flex justify-center items-center" }, _attrs))}><div class="w-full lg:w-1/3 px-10 lg:px-0"><div class="flex justify-center items-center mx-auto mb-4 w-40"><div class="relative"><a href="#"><img${ssrRenderAttr("src", unref(avatarUrl) || "/avatar.jpg")} alt="avatar" class="rounded-full border-white border-4"><img${ssrRenderAttr("src", _imports_0)} alt="add avatar icon" class="absolute right-0 bottom-0 pb-2"></a><input type="file" class="absolute inset-0 opacity-0 cursor-pointer"></div></div><h2 class="font-normal mb-3 text-3xl text-white text-center"> Hi, ${ssrInterpolate(unref(userName))}</h2><p class="text-white text-center font-light"> Please upload your selfie </p><div class="mb-4 mt-6"><div class="mb-3"><button class="block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 text-lg rounded-full"> Sign Up Now </button></div></div><div><div class="mb-4"><button class="block w-full bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light px-6 py-4 text-lg rounded-full"> Skip </button></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/upload.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=upload-fPbM2wCg.mjs.map

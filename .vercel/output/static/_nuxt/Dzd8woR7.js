import{_ as b,a as w}from"./HE5pMjyY.js";import{u as y,_ as j}from"./BbN7t7o_.js";import{p as s,f as k,c as l,b as c,a as t,F as C,r as N,u as p,d as i,e as d,o as r,g,t as a,n as F}from"./DpY7Jxqy.js";import"./BcNGlyYo.js";const R=s("/hero-image@2x.png"),S=s("/line-step.svg"),U=s("/step-1-illustration.svg"),A=s("/step-2-illustration.svg"),L=s("/step-3-illustration.svg"),V=s("/testimonial-line.svg"),$=s("/testimonial-1-icon.png"),B=s("/testimonial-2-icon.png"),E=s("/testimonial-3-icon.png"),O={class:"landing-page"},P={class:"landing-hero pt-5"},T=t("div",{class:"header__bg"},null,-1),D={class:"container mx-auto relative flex items-center px-20"},W={class:"flex items-center pt-10 px-5 md:px-0"},z={class:"w-1/2"},H=t("h1",{class:"text-4xl text-white mb-5"},[i(" We helps "),t("u",{class:"hero-underline"},"startup"),i(" to "),t("br"),i(" getting started & "),t("u",{class:"hero-underline"},"funding"),i(),t("br"),i(" their truly needs ")],-1),I=t("p",{class:"text-white text-xl font-light mb-8"},[i(" Fund the best idea to become "),t("br"),i(" a real product and be the contributor ")],-1),J=t("div",{class:"w-1/2 flex justify-center"},[t("img",{src:R,alt:"crowdfunding project"})],-1),M=d('<section class="container mx-auto pt-24 px-20"><div class="flex justify-between items-center mb-10"><div class="w-auto"><h2 class="text-3xl text-gray-900 mb-8"> Only 3 steps to execute <br> your bright ideas </h2></div></div><div class="flex"><div class="w-full px-56 mb-5"><img src="'+S+'" alt="" class="w-full"></div></div><div class="flex justify-between items-center text-center"><div class="w-1/3"><figure class="flex justify-center items-center"><img src="'+U+'" alt="" class="h-30 mb-8"></figure><div class="step-content"><h3 class="font-medium">Sign Up</h3><p class="font-light"> Sign Up account and start <br>funding project </p></div></div><div class="w-1/3"><figure class="flex justify-center items-center -mt-24"><img src="'+A+'" alt="" class="h-30 mb-8"></figure><div class="step-content"><h3 class="font-medium">Open Project</h3><p class="font-light"> Choose some project idea, <br> and start funding </p></div></div><div class="w-1/3"><figure class="flex justify-center items-center -mt-48"><img src="'+L+'" alt="" class="h-30 mb-8"></figure><div class="step-content"><h3 class="font-medium">Execute</h3><p class="font-light"> Time to makes dream <br> comes true </p></div></div></div></section>',1),q={class:"container mx-auto pt-24 px-20"},G=d('<div class="flex justify-between items-center"><div class="w-auto"><h2 class="text-3xl text-gray-900 mb-8"> New projects you can <br> taken care of </h2></div><div class="w-auto mt-5"><a class="text-gray-900 hover:underline text-md font-medium" href="">View All</a></div></div>',1),K={class:"grid grid-cols-3 gap-4 mt-3"},Q={class:"item"},X={class:"item-image"},Y=["src"],Z={class:"item-meta"},tt={class:"text-3xl font-medium text-gray-900 mt-5"},et={class:"text-md font-light text-gray-900 h-12"},st={class:"relative pt-4 progress-bar"},it={class:"overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 h-3 rounded-lg"},ot={class:"flex progress-info"},nt={class:"ml-auto font-semibold"},at=["onClick"],lt=d('<section class="container mx-auto pt-24 px-20"><div class="flex justify-between items-center"><div class="w-auto"><h2 class="text-3xl text-gray-900 mb-8"> See What Our <br> Happy Clients Say </h2></div></div><div class="flex mb-10"><div class="w-2/12 flex justify-center items-start"><img src="'+V+'" alt=""></div><div class="w-8/12 mt-16"><h2 class="text-3xl text-gray-900 font-light"> “Funding at Bucker is very easy and comfortable. <br> Just need to find an idea, click and already funding.” </h2><div class="testimonial-info mt-8"><div class="name text-xl font-semibold">Shopie Nicole</div><div class="title text-xl font-light text-gray-400"> Project Manager </div></div><div class="testimonial-icon mt-10"><img src="'+$+'" alt="" class="w-20 mr-5 inline-block testimonial-user rounded-full"><img src="'+B+'" alt="" class="w-20 mr-5 inline-block testimonial-user rounded-full"><img src="'+E+'" alt="" class="w-20 mr-5 inline-block testimonial-user active rounded-full"></div></div><div class="w-2/12"></div></div></section><div class="cta-clip -mt-20"></div>',2),pt={__name:"index",async setup(ct){let o,u;const{data:f,error:m}=([o,u]=k(()=>y("campaigns",()=>$fetch("/api/v1/campaigns",{baseURL:g().public.baseURL}))),o=await o,u(),o);return m.value&&console.error("Error fetching campaigns:",m.value),(n,_)=>{const h=b,v=j,x=w;return r(),l("div",O,[c(h),t("section",P,[T,t("div",D,[t("div",W,[t("div",z,[H,I,t("button",{onClick:_[0]||(_[0]=e=>n.$router.push({path:"/"})),class:"block bg-orange-button hover:bg-green-button text-white font-semibold px-12 py-3 text-xl rounded-full"}," Find a Project ")]),J])])]),M,t("section",q,[G,t("div",K,[(r(!0),l(C,null,N(p(f).data,e=>(r(),l("div",{key:e.id,class:"card-project w-full p-5 border border-gray-500 rounded-20"},[t("div",Q,[t("figure",X,[t("img",{src:("useRuntimeConfig"in n?n.useRuntimeConfig:p(g))().public.baseURL+"/"+e.image_url,alt:"",class:"card-image rounded-20 w-full"},null,8,Y)]),t("div",Z,[t("h4",tt,a(e.name),1),t("p",et,a(e.short_description),1),t("div",st,[t("div",it,[t("div",{style:F("width: "+e.current_amount/e.goal_amount*100+"%"),class:"shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-progress progress-striped"},null,4)])]),t("div",ot,[t("div",null,a(e.current_amount/e.goal_amount*100)+"%",1),t("div",nt,"Rp. "+a(new Intl.NumberFormat().format(e.goal_amount)),1)])]),t("button",{onClick:rt=>n.$router.push({name:"projects-id",params:{id:e.id}}),class:"text-center mt-5 button-cta block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-2 text-lg rounded-full"}," Fund Now ",8,at)])]))),128))])]),lt,c(v),c(x)])}}};export{pt as default};

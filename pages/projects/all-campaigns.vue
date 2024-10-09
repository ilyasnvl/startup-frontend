<template>
    <div class="landing-page">
     <Navbar />
     <section class="container mx-auto pt-24 px-20">
       <div class="flex justify-between items-center">
         <div class="w-auto">
           <h2 class="text-3xl text-gray-900 mb-8">
             List of 
             All Projects
           </h2>
         </div>
        <div class="mb-8">
            <input
                v-model="search"
                type="text"
                placeholder="Search by project name..."
                class="w-full p-3 border border-gray-400 rounded-lg"
            />
        </div>
       </div>

       <!-- Validasi jika tidak ada campaign yang ditemukan -->
      <div v-if="filterCampaigns.length === 0" class="text-center text-gray-500 text-lg">
        No projects found with the name "{{ search }}"
      </div>

       <div v-else class="grid grid-cols-3 gap-4 mt-3">
         <div
           v-for="campaign in filterCampaigns" :key="campaign.id" 
           class="card-project w-full p-5 border border-gray-500 rounded-20">
           <div class="item">
             <figure class="item-image">
               <img
                 :src="useRuntimeConfig().public.baseURL + '/' + campaign.image_url"
                 alt=""
                 class="card-image rounded-20 w-full"
               />
             </figure>
             <div class="item-meta">
               <h4 class="text-3xl font-medium text-gray-900 mt-5">
                 {{ campaign.name }}
               </h4>
               <p class="text-md font-light text-gray-900 h-12">
                 {{ campaign.short_description }}
               </p>
               <div class="relative pt-4 progress-bar">
                 <div
                   class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200 h-3 rounded-lg"
                 >
                   <div
                     :style="'width: ' + (campaign.current_amount / campaign.goal_amount) * 100 + '%'"
                     class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-progress progress-striped"
                   ></div>
                 </div>
               </div>
               <div class="flex progress-info">
                 <div>{{ (campaign.current_amount / campaign.goal_amount) * 100 }}%</div>
                 <div class="ml-auto font-semibold">Rp. {{ new Intl.NumberFormat().format(campaign.goal_amount) }}</div>
               </div>
             </div>
             <button
               @click="$router.push({
                 name: 'projects-id', 
                 params: { id: campaign.id }, 
               })"
               class="text-center mt-5 button-cta block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-2 text-lg rounded-full"
             >
               Fund Now
           </button>
           </div>
         </div>
       </div>
     </section>
     <div class="cta-clip -mt-20"></div>
     <CallToAction />
     <Footer />
   </div>
</template>

<script setup>

const { data: campaigns, error } = await useAsyncData('campaigns', () => 
 $fetch(`${useRuntimeConfig().public.baseURL}/api/v1/campaigns`),
)

 // state untuk search campaign
const search = ref('')

// computed properti untuk memfilter campaign
const filterCampaigns = computed(() => {
    if (!search.value) {
        return campaigns.value.data
    }

    // Filter campaign berdasarkan nama atau deskripsi
    return campaigns.value.data.filter(campaign =>
        campaign.name.toLowerCase().includes(search.value.toLowerCase()) ||
        campaign.short_description.toLowerCase().includes(search.value.toLowerCase())
    );
})

if (error.value) {
 console.error('Error fetching campaigns:', error.value)
}

</script>

<style>
 .card-image {
 width: 100%;
 height: 100%;
 aspect-ratio: 3 / 2;
 object-fit: cover; /* Menyesuaikan gambar ke dalam container dengan memotong */
}
</style>
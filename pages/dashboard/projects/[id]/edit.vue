<template>
    <NuxtLayout name="auth">
      <form @submit.prevent="save">
      <div class="project-page">
        <section class="dashboard-header pt-5">
          <div class="container mx-auto relative">
            <Navbar />
          </div>
        </section>
        <section class="container mx-auto pt-8">
          <div class="flex justify-between items-center">
            <div class="w-full mr-6">
              <h2 class="text-4xl text-gray-900 mb-2 font-medium">Dashboard</h2>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <div class="w-3/4 mr-6">
              <h3 class="text-2xl text-gray-900 mb-4">Edit Campaign "{{ campaign.data.name }}"</h3>
            </div>
            <div class="w-1/4 text-right">
              <button
                type="submit"
                class="bg-green-button hover:bg-green-button text-white font-bold px-4 py-1 rounded inline-flex items-center"
              >
                Update
              </button>
              <p></p>
            </div>
          </div>
          <div class="block mb-2">
            <div class="w-full lg:max-w-full lg:flex mb-4">
              <div
                class="w-full border border-gray-400 bg-white rounded p-8 flex flex-col justify-between leading-normal"
              >
                <div class="w-full">
                  <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      >
                        Campaign Name
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="text"
                        placeholder="Contoh: Demi Gunpla Demi Istri"
                        v-model="campaign.data.name"
                      />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      >
                        Price
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="number"
                        placeholder="Contoh: 200000"
                        v-model.number="campaign.data.goal_amount"
                      />
                    </div>
                    <div class="w-full px-3">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-3"
                      >
                        Short Description
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="text"
                        placeholder="Deskripsi singkat mengenai projectmu"
                        v-model="campaign.data.short_description"
                      />
                    </div>
                    <div class="w-full px-3">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      >
                        What will backers get
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="text"
                        placeholder="Contoh: Ayam, Nasi Goreng, Piring"
                        v-model="campaign.data.perks"
                      />
                    </div>
                    <div class="w-full px-3">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      >
                        Description
                      </label>
                      <textarea
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="text"
                        placeholder="Isi deskripsi panjang untuk projectmu"
                        v-model="campaign.data.description"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="cta-clip -mt-20"></div>
        <section class="call-to-action bg-purple-progress pt-64 pb-10"></section>
        <Footer />
      </div>
      </form>
    </NuxtLayout>
  </template>
  
<script setup>
definePageMeta({
    middleware: 'auth'
})

const route = useRoute()
const router = useRouter()
const { data: session } = useAuth()
const campaignId = route.params.id
const errorMessage = ref('')

const { data: campaign } = await useAsyncData('campaign', () =>
  fetch(`${useRuntimeConfig().public.baseURL}/api/v1/campaigns/${campaignId}`).then(res => res.json())
)
// console.log(campaign.value)

const save = async () => {
    try {
        const token = session?.value?.accessToken // Ambil token dari session

    if (token) {
      console.log('AccessToken:', token);
    } else {
      console.error('AccessToken tidak ditemukan, pengguna belum login.');
    }

    const response = await $fetch(`${useRuntimeConfig().public.baseURL}/api/v1/campaigns/${campaignId}`, {
      method: 'PUT',
      body: JSON.stringify({
        name: campaign.value.data.name,
        short_description: campaign.value.data.short_description,
        description: campaign.value.data.description,
        goal_amount: campaign.value.data.goal_amount,
        perks: campaign.value.data.perks,
      }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })

    // if (campaign.data.user_id !== user.id) {
    //   return sendError(createError({ statusCode: 403, statusMessage: 'Forbidden' }));
    // }
    
    if (response.meta.status === 'success') {
      console.log('Create campaign successfully');
      await router.push({ 
        name: 'dashboard-projects-id',
        params: { id: response.data.id },
       });
    } else {
      errorMessage.value = 'Create campaign failed';
    }
    } catch (error) {
    console.error('Error:', error);
    errorMessage.value = 'Terjadi kesalahan saat membuat campaign. Silakan coba lagi.';
    }
}

</script>
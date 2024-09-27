<template>
    <div class="project-page">
      <section class="project-header pt-5">
        <div class="container mx-auto relative">
          <Navbar />
        </div>
      </section>
      <section class="container project-container mx-auto -mt-56">
        <div class="flex mt-3">
          <div class="w-3/4 mr-6">
            <div class="bg-white p-3 mb-3 border border-gray-400 rounded-20">
              <figure class="item-image">
                <img
                  :src="defaultImage"
                  alt=""
                  class="rounded-20 w-full"
                />
              </figure>
            </div>
            <div class="flex -mx-2">
              <div
                v-for="image in campaign.data.images"
                :key="image.image_url"
                class="relative w-1/4 bg-white m-2 p-2 border border-gray-400 rounded-20"
              >
                <figure class="item-thumbnail cursor-pointer">
                  <img
                    :src="useRuntimeConfig().public.baseURL + '/' + image.image_url"
                    @click="
                      changeImage(useRuntimeConfig().public.baseURL + '/' + image.image_url)  
                    "
                    alt=""
                    class="rounded-20 w-full"
                  />
                </figure>
              </div>
            </div>
          </div>
          <div class="w-1/4">
            <div
              class="bg-white w-full p-5 border border-gray-400 rounded-20 sticky"
              style="top: 15px"
            >
              <h3>Project Leader:</h3>

              <div class="flex mt-3">
                <div class="w-1/4">
                  <img
                    :src="useRuntimeConfig().public.baseURL + '/' + campaign.data.user.image_url"
                    alt=""
                    class="w-full inline-block rounded-full"
                  />
                </div>
                <div class="w-3/4 ml-5 mt-1">
                  <div class="font-semibold text-xl text-gray-800">
                    {{ campaign.data.user.name }}
                  </div>
                  <div class="font-light text-md text-gray-400">
                    {{ campaign.data.backer_count }}
                  </div>
                </div>
              </div>

              <h4 class="mt-5 font-semibold">What will you get:</h4>
              <ul class="list-check mt-3">
                <li v-for="perk in campaign.data.perks" :key="perk">
                  {{ perk }}
                </li>
              </ul>
              <template v-if="status === 'authenticated'">
                <form @submit.prevent="fund">
                  <input
                  type="number"
                  class="border border-gray-500 block w-full px-6 py-3 mt-4 rounded-full text-gray-800 transition duration-300 ease-in-out focus:outline-none focus:shadow-outline"
                  placeholder="Amount in Rp"
                  v-model.number="transactions.amount"
                  />
                  <button
                    type="submit"
                    class="text-center mt-3 button-cta block w-full bg-orange-button hover:bg-green-button text-white font-medium px-6 py-3 text-md rounded-full"
                  >
                    Fund Now
                  </button>
                </form>
              </template>
              <template v-else>
              <button
                @click="$router.push({ path: '/login' })"
                class="mt-3 button-cta block w-full bg-orange-button hover:bg-green-button text-white font-medium px-6 py-3 text-md rounded-full"
              >
                Sign in to Fund
              </button>
            </template>
            </div>
          </div>
        </div>
      </section>
      <section class="container mx-auto pt-8">
        <div class="flex justify-between items-center">
          <div class="w-full md:w-3/4 mr-6">
            <h2 class="text-4xl text-gray-900 mb-2 font-medium">
              {{ campaign.data.name }}
            </h2>
            <p class="font-light text-xl mb-5">
              {{ campaign.data.short_description }}
            </p>

            <div class="relative progress-bar">
              <div
                class="overflow-hidden mb-4 text-xs flex rounded-full bg-gray-200 h-6"
              >
                <div
                  :style="
                    'width: ' + (campaign.data.current_amount / campaign.data.goal_amount) * 100 + '%'"
                  class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-progress progress-striped"
                ></div>
              </div>
            </div>
            <div class="flex progress-info mb-6">
              <div class="text-2xl">
                {{ 
                  (campaign.data.current_amount / campaign.data.goal_amount) * 100 
                }}%
              </div>
              <div class="ml-auto font-semibold text-2xl">
                Rp. {{ new Intl.NumberFormat().format(campaign.data.goal_amount) }}
              </div>
            </div>

            <p class="font-light text-xl mb-5">
              {{ campaign.data.description }}
            </p>
          </div>
          <div class="w-1/4 hidden md:block"></div>
        </div>
      </section>
      <div class="cta-clip -mt-20"></div>
      <CallToAction />
      <Footer />
    </div>
</template>

<script setup>

const route = useRoute()
const { status } = useAuth()
const { data: session } = useAuth()
const campaignId = route.params.id

//const cleanData = (data) => JSON.parse(JSON.stringify(data))

const { data: campaign } = await useAsyncData('campaign', () =>
  fetch('/api/v1/campaigns/' + campaignId, {
    baseURL: useRuntimeConfig().public.baseURL,
  }).then(res => res.json())
)
// console.log(campaign.value)
console.log(campaign.value.data)

const defaultImage = ref('')
const transactions = ref({
  amount: '',
  campaign_id: Number.parseInt(campaignId),
})

const fund = async () => {
  try {
    if (status.value !== 'authenticated') {
      console.error('Pengguna belum login.')
      return
    }

    const token = session?.value?.accessToken // Ambil token dari session

    if (!token) {
      console.error('AccessToken tidak ditemukan, pengguna belum login.');
      return
    }

    const response = await $fetch('https://startup-go-production.up.railway.app/api/v1/transactions', {
      method: 'POST',
      body: {
        amount: transactions.value.amount,
        campaign_id: transactions.value.campaign_id,
      },
      headers: {
        'Authorization': `Bearer ${token}`, // Sertakan token dalam header
      },
    })

    if (response.data.payment_url) {
      window.location = response.data.payment_url
    }

    console.log(response)
  } catch (error) {
    console.log('error: ', error)
  }
}

console.log('access token:: ', session.value.accessToken)

// Cek perubahan session dan lakukan log jika berubah
// watch(session, (newSession) => {
//   console.log('Session Updated:', newSession)
// })

const changeImage = (url) => {
  defaultImage.value = url
}

onMounted(() => {
  if (campaign.value && campaign.value.data.image_url) {
    defaultImage.value = useRuntimeConfig().public.baseURL + '/' + campaign.value.data.image_url
  }
})

</script>
<template>
    <div class="project-page">
      <section class="dashboard-header pt-5">
        <div class="container mx-auto relative">
          <Navbar />
        </div>
      </section>
      <section class="container mx-auto pt-8">
        <div class="flex justify-between items-center mb-6">
          <div class="w-3/4 mr-6">
            <h2 class="text-4xl text-gray-900 mb-2 font-medium">Dashboard</h2>
            <ul class="flex mt-2">
              <li class="mr-6">
                <a class="text-gray-800 font-bold" href="#"> Your Projects </a>
              </li>
              <li class="mr-6">
                <NuxtLink
                  class="text-gray-500 hover:text-gray-800"
                  to="/dashboard/transactions"
                >
                  Your Transactions
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="w-1/4 text-right">
            <NuxtLink
              to="/dashboard/projects/create"
              class="bg-orange-button hover:bg-green-button text-white font-bold py-4 px-4 rounded inline-flex items-center"
            >
              + Create Campaign
            </NuxtLink>
          </div>
        </div>
        <hr />
        <div class="block mb-2">
          <div class="w-full lg:max-w-full lg:flex mb-4" v-for="campaign in campaigns.data" :key="campaign.id">
            <div
              class="border h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              :style="'background-color: #bbb; background-position: center; background-image: url(\'' + 
              useRuntimeConfig().public.baseURL + 
              '/' + 
              campaign.image_url + 
              '\')'"
            ></div>
            <NuxtLink
            :to="'/dashboard/projects/' + campaign.id"
              class="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-8 flex flex-col justify-between leading-normal"
            >
              <div class="mb-8">
                <div class="text-gray-900 font-bold text-xl mb-1">
                  {{ campaign.name }}
                </div>
                <p class="text-sm text-gray-600 flex items-center mb-2">
                  Rp. {{ new Intl.NumberFormat().format(campaign.goal_amount) }} 
                  &middot; 
                  {{ (campaign.current_amount / campaign.goal_amount) * 100 }}%
                </p>
                <p class="text-gray-700 text-base">
                  {{ campaign.short_description }}
                </p>
              </div>
              <div class="flex items-center">
                <button
                  class="bg-green-button text-white py-2 px-4 rounded"
                >
                  Detail
                </button>
              </div>
            </NuxtLink>
          </div>
        </div>
        <div 
          v-if="campaigns.data.length === 0"
          class="no-projects">
          Belum ada Campaign
        </div>
      </section>
      <div class="cta-clip -mt-20"></div>
      <section class="call-to-action bg-purple-progress pt-64 pb-10"></section>
      <Footer />
    </div>
</template>

<script setup>

import { useFetch, useAuth } from '#imports'

// Mengambil data user dari Nuxt Auth
const { data: authData, status } = useAuth()

// Menunggu data kampanye yang difetch dari API
const { data: campaigns } = await useAsyncData('campaigns', () => {

  // Mengecek apakah user sudah terotentikasi dan user ID tersedia
  if (status.value === 'authenticated' || authData.value?.user?.user_id) {
    const userId = authData.value.user.user_id
  
    return $fetch(`${useRuntimeConfig().public.baseURL}/api/v1/campaigns?user_id=${userId}`)
  }
  return null // Tidak melakukan fetch jika belum terotentikasi
})

definePageMeta({
  middleware: 'auth'
})
</script>

<style scoped>
.no-projects {
  padding: 16px;
  background-color: #f8d7da; /* Warna latar belakang merah muda lembut */
  border: 1px solid #f5c6cb; /* Border dengan warna merah lembut */
  border-radius: 8px; /* Sudut melengkung */
  color: #721c24; /* Warna teks merah tua */
  text-align: center; /* Teks rata tengah */
  font-weight: bold; /* Gaya teks tebal */
  margin-top: 20px; /* Memberi jarak atas */
}
</style>
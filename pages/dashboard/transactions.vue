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
                <NuxtLink
                  class="text-gray-500 hover:text-gray-800"
                  to="/dashboard"
                >
                  Your Projects
                </NuxtLink>
              </li>
              <li class="mr-6">
                <NuxtLink
                  class="text-gray-800 font-bold"
                  to="/dashboard/transactions"
                >
                  Your Transactions
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div class="block mb-2">
          <div class="w-full lg:max-w-full lg:flex mb-4" v-for="transaction in transactions.data" :key="transaction.id">
            <div
              class="border h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              :style="'background-color: #bbb; background-position: center; background-image: url(\'' + 
              useRuntimeConfig().public.baseURL + 
              '/' + 
              transaction.campaign.image_url + 
              '\')'"
            ></div>
            <div
              class="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-8 flex flex-col justify-between leading-normal"
            >
              <div>
                <div class="text-gray-900 font-bold text-xl mb-1">
                  {{ transaction.campaign.name }}
                </div>
                <p class="text-sm text-gray-600 flex items-center mb-2">
                  Rp. 
                  {{ new Intl.NumberFormat().format(transaction.amount) }} 
                  &middot; {{ new Date(transaction.created_at).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }) }} 
                </p>
                <p
                  class="text-sm text-gray-600 flex items-center mb-2">
                  <span :class="{
                    'bg-green-200 text-gray-600px-2 py-1 rounded': transaction.status === 'success',
                    'bg-yellow-200 text-gray-600 px-2 py-1 rounded': transaction.status === 'pending',
                    'bg-red-200 text-gray-600 px-2 py-1 rounded': transaction.status === 'failed'
                  }"
                  class="ml-1">
                  {{ transaction.status }}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div 
          v-if="transactions.data.length === 0"
          class="no-transactions">
          Belum ada Transaksi
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
const { data: transactions } = await useAsyncData('transactions', () => {

  // Mengecek apakah user sudah terotentikasi dan user ID tersedia
  if (status.value === 'authenticated' || authData.value) {
    const token = authData.value.accessToken
  
    return $fetch(`${useRuntimeConfig().public.baseURL}/api/v1/transactions`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })
  }
  return null // Tidak melakukan fetch jika belum terotentikasi
})

definePageMeta({
  middleware: 'auth'
})
</script>

<style scoped>
.no-transactions {
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
<template>
    <div class="project-page">
      <section>
        <div>
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
            <h3 class="text-2xl text-gray-900 mb-4">Campaign Details</h3>
          </div>
          <div class="w-1/4 text-right">
            <nuxt-link
              :to="{
              name: 'dashboard-projects-id-edit',
              params: { id: campaign.data.id },
              }"
              class="bg-green-button hover:bg-green-button text-white font-bold px-4 py-1 rounded inline-flex items-center"
            >
              Edit
            </nuxt-link>
          </div>
        </div>
        <div class="block mb-2">
          <div class="w-full lg:max-w-full lg:flex mb-4">
            <div
              class="border w-full border-gray-400 bg-white rounded p-8 flex flex-col justify-between leading-normal"
            >
              <div>
                <div class="text-gray-900 font-bold text-xl mb-2">
                  {{ campaign.data.name }}
                </div>
                <p class="text-sm font-bold flex items-center mb-1">
                  Description
                </p>
                <p class="text-gray-700 text-base">
                  {{ campaign.data.description }}
                </p>
                <p class="text-sm font-bold flex items-center mb-1 mt-4">
                  What Will Funders Get
                </p>
                <ul class="list-disc ml-5">
                  <li v-for="perk in campaign.data.perks" :key="perk">
                  {{ perk }}
                </li>
                </ul>
                <p class="text-sm font-bold flex items-center mb-1 mt-4">
                  Price
                </p>
                <p class="text-4xl text-gray-700 text-base">
                  {{ new Intl.NumberFormat().format(campaign.data.goal_amount) }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <div class="w-2/4 mr-6">
            <h3 class="text-2xl text-gray-900 mb-4 mt-5">Gallery</h3>
          </div>
          <div>
            <input v-show="fileSelected"
              type="file" 
              ref="file" 
              @change="selectFile"
              class="border p-1 rounded overflow-hidden">
          </div>
          <div class="w-2/4 text-right">
            <button
              @click="triggerFileInput"
              class="bg-blue-500 hover:bg-yellow-500 text-white font-bold px-4 py-2 rounded inline-flex items-center">
              Tambah Gambar
            </button>
            <button 
              @click="upload"
              :disabled="!selectedFile"
              :class="{
                'bg-blue-500': selectedFile,
                'bg-gray-400': !selectedFile,
                'hover:bg-blue-600': selectedFile,
                'hover:bg-gray-400': !selectedFile
              }"
              class="text-white font-bold px-4 py-2 ml-3 rounded inline-flex items-center"
            >
              Upload
            </button>
          </div>
        </div>
        <div class="flex -mx-2">
          <div
            class="relative w-1/4 bg-white m-2 p-2 border border-gray-400 rounded"
            v-for="image in campaign.data.images"
            :key="image.image_url"
          >
            <figure class="item-thumbnail">
              <img 
                :src="useRuntimeConfig().public.baseURL + '/' + image.image_url"
                alt="" 
                class="rounded w-full" />
            </figure>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <div class="w-3/4 mr-6">
            <h3 class="text-2xl text-gray-900 mb-4 mt-5">
              Transaction History
            </h3>
          </div>
        </div>
        <div class="block mb-2">
          <div 
            class="w-full lg:max-w-full lg:flex mb-4"
            v-for="transaction in transactions.data"
            :key="transaction.id"
            >
            <div
              class="w-full border border-gray-400 lg:border-gray-400 bg-white rounded p-8 flex flex-col justify-between leading-normal"
            >
              <div>
                <div class="text-gray-900 font-bold text-xl mb-1">
                  {{ transaction.name }}
                </div>
                <p 
                  class="text-sm text-gray-600 flex items-center mb-2">
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
definePageMeta({
  middleware: 'auth'
})

const route = useRoute()
const { data: session } = useAuth()
const campaignId = route.params.id
const selectedFile = ref(null)
const file = ref(null)
const showForm = ref(false)
const fileSelected = ref(false)

// Fetch data campaign dengan token di header
const { data: campaign, error: campaignError } = await useAsyncData('campaign', () => 
      $fetch(`${useRuntimeConfig().public.baseURL}/api/v1/campaigns/${campaignId}`)
    )
if (campaignError?.value) {
  console.error('Terjadi kesalahan saat mengambil data campaign:', campaignError.value)
}

const triggerFileInput = () => {
  if (file.value) {
    file.value.click() // Memanggil click pada input file jika terinisialisasi
  } else {
    console.error('File input is not initialized')
  }
}

// funsi untuk memilih file
const selectFile = (event) => {
  const file = event.target.files[0]
  if (file) {
        selectedFile.value = file; // Simpan file yang dipilih
        fileSelected.value = true; // Tampilkan input file
      } else {
        selectedFile.value = null; // Reset jika tidak ada file
        fileSelected.value = false; // Sembunyikan input file
      }
}

// Fungsi untuk memunculkan form
const toggleForm = () => {
  showForm.value = true
}

// fungsi untuk memuat data campaign
const load = async () => {
  try {
    const { data, error } = await useAsyncData('campaign', () => 
      $fetch(`${useRuntimeConfig().public.baseURL}/api/v1/campaigns/${campaignId}`)
    )
    if (!error.value) {
      campaign.value = data.value
    } else {
      console.error('Terjadi kesalahan saat memuat campaign:', error.value)
    }
  } catch (err) {
    console.error(err)
  }
}

// fungsi untuk upload gambar campaign
const upload = async () => {
  if (!selectedFile.value || selectedFile.value.length === 0) {
    console.error('No file selected')
    return
  }

  const formData = new FormData()
  formData.append('campaign_id', campaignId)
  formData.append('file', selectedFile.value) // mengambil file yang dipilih
  formData.append('is_primary', true)

  try {
    const response = await $fetch(`${useRuntimeConfig().public.baseURL}/api/v1/campaign-images`, {
      method: 'POST',
      body: formData,
      headers: {
        'Authorization': `Bearer ${token}`,
      }
    })

    console.log('Upload Successfull: ', response)

    // muat ulang campaign setelah di upload
    await load()
    selectedFile.value = null // reset selected file
  } catch (err) {
    console.error('error uploading file:', err)
  }
}

// Ambil token dari session auth
const token = session?.value?.accessToken

if (!token) {
  console.error('AccessToken tidak ditemukan, pengguna belum login.')
}

// Fetch data transactions dengan token di header
const { data: transactions, error: transactionsError } = await useAsyncData('transaction', () =>
      $fetch(`${useRuntimeConfig().public.baseURL}/api/v1/campaigns/${campaignId}/transactions`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
    )
if (transactionsError?.value) {
  console.error('Terjadi kesalahan saat mengambil data transaction:', transactionsError?.value)
  }
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
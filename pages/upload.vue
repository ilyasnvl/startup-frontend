<template>
    <div class="container mx-auto h-screen flex justify-center items-center">
        <div class="w-full lg:w-1/3 px-10 lg:px-0">
          <div class="flex justify-center items-center mx-auto mb-4 w-40">
            <div class="relative">
              <a href="#">
                <img
                  :src="avatarUrl || '/avatar.jpg'"
                  alt="avatar"
                  class="rounded-full border-white border-4"
                />
                <img
                  src="/icon-avatar-add.svg"
                  alt="add avatar icon"
                  class="absolute right-0 bottom-0 pb-2"
                />
              </a>
              <input 
                type="file" 
                @change="onFileChange"
                class="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
          </div>
          <h2 class="font-normal mb-3 text-3xl text-white text-center">
            Hi, {{ userName }}
          </h2>
          <p class="text-white text-center font-light">
            Please upload your selfie
          </p>
          <div class="mb-4 mt-6">
            <div class="mb-3">
              <button
                @click="uploadAvatar"
                class="block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 text-lg rounded-full"
              >
                Sign Up Now
              </button>
            </div>
            <!-- <h1>{{ data.userName }}</h1> -->
          </div>
          <div>
            <div class="mb-4">
              <button
                @click="skipUpload"
                class="block w-full bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light px-6 py-4 text-lg rounded-full"
              >
                Skip
              </button>
            </div>
          </div>
        </div>
    </div>
</template>

<script setup>

definePageMeta({
  layout: 'auth',
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/register-success'
  }
})

const router = useRouter()
const avatarUrl = ref('')
const selectedFile = ref(null)
const userName = router.currentRoute.value.query.name  // Ambil nama dari query

const { data: session } = useAuth()

// Fungsi untuk menangani perubahan file (gambar) saat pengguna memilih file baru
const onFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    selectedFile.value = file;
    avatarUrl.value = URL.createObjectURL(file); // Mengatur preview avatar
  }
};

// Fungsi untuk mengunggah gambar avatar
const uploadAvatar = async () => {
  if (!selectedFile.value) {
    alert('Please select an avatar before uploading.');
    return;
  }

  const formData = new FormData();
  formData.append('avatar', selectedFile.value);

  try {
    // Pastikan session ada dan valid 
    // if (!data?.value?.accessToken) {
    //   throw new Error('Token tidak ditemukan. Pengguna belum login.');
    // }
    const token = session?.value?.accessToken // Ambil token dari session

    if (token) {
      console.log('AccessToken:', token);
    } else {
      console.error('AccessToken tidak ditemukan, pengguna belum login.');
    }

    // Ganti URL di sini sesuai dengan endpoint upload avatar
    const response = await $fetch('/api/v1/avatars', {
      method: 'POST',
      body: formData,
      headers: {
        'Authorization': `Bearer ${token}`, // Sertakan token dalam header
      },
    });

    if (response.meta.status === 'success') {
      console.log('Avatar uploaded successfully');
      await router.push({ path: '/register-success' });
    } else {
      console.error('Avatar upload failed:', response.message);
    }
  } catch (error) {
    console.error('Upload error:', error);
  }
};

// Fungsi untuk melewati unggah avatar
const skipUpload = () => {
  router.push({ path: '/register-success' });
};

</script>

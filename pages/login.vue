<template>
  <NuxtLayout name="auth">
    <form @submit.prevent="login">
      <div class="h-screen flex justify-center items-center">
        <div
          class="hidden md:block lg:w-1/3 bg-white h-full auth-background rounded-tr-lg rounded-br-lg">
        </div>
        <div class="w-auto md:w-2/4 lg:w-2/3 flex justify-center items-center">
          <div class="w-full lg:w-1/2 px-10 lg:px-0">
            <h2 class="font-normal mb-6 text-3xl text-white">
              Sign In to Your Account
            </h2>
            <div v-if="error" class="ticker-container rounded-lg">
              <div>
                <span class="ticker-text">{{ error }}</span>
              </div>
            </div>
            <div class="mb-6">
              <div class="mb-4">
                <label class="font-normal text-lg text-white block mb-3"
                  >Email Address</label
                >
                <input
                  type="email"
                  class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
                  placeholder="Write your email address here" 
                  v-model="email"
                />
              </div>
            </div>
            <div class="mb-6">
              <div class="mb-4">
                <label class="font-normal text-lg text-white block mb-3"
                  >Password</label
                >
                <input
                  @keyup.enter="login"
                  type="password"
                  class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
                  placeholder="Write your password here" 
                  v-model="password"
                />
              </div>
            </div>
            <div class="mb-6">
              <div class="mb-4">
                <button
                  type="submit"
                  class="block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 text-lg rounded-full"
                >
                  Sign In
                </button>
              </div>
            </div>
            <div class="text-center">
              <p class="text-white text-md">
                Don't have account?
                <NuxtLink to="/register" class="no-underline text-orange-button">
                    Sign Up
                </NuxtLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  middleware: 'login-regist',
})

import { ref } from 'vue';

const email = ref('');
const password = ref('');
const error = ref('');
const { signIn } = useAuth()

const login = async () => {
  const response = await signIn('credentials', {
    redirect: false,
    email: email.value,
    password: password.value,
  });

  if (response?.error) {
    error.value = 'Sign In Gagal. Masukkan Email dan Password yang Benar';
  } else {
    // Redirect ke halaman setelah berhasil login
    error.value = '';
    useRouter().push('/'); // Ubah sesuai rute yang diinginkan
  }
};
</script>

<style scoped>
  .auth-background {
    background-image: url("/sign-in-background.jpg");
    background-position: center;
    background-size: cover;
  }
</style>

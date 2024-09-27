<template>
  <NuxtLayout name="auth">
    <form @submit.prevent="register">
    <div class="h-screen flex justify-center items-center">
        <div
          class="hidden md:block lg:w-1/3 bg-white h-full auth-background rounded-tr-lg rounded-br-lg"
        ></div>
        <div class="w-auto md:w-2/4 lg:w-2/3 flex justify-center items-center">
          <div class="w-full lg:w-1/2 px-10 lg:px-0">
            <h2 class="font-normal mb-6 text-3xl text-white">
              Sign Up Account
            </h2>
            <div class="mb-6">
              <div class="mb-4">
                <label class="font-normal text-lg text-white block mb-3"
                  >Full Name</label
                >
                <input
                  type="text"
                  class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
                  placeholder="Write Your Name Here"
                  v-model="form.name"
                />
              </div>
            </div>
            <div class="mb-6">
              <div class="mb-4">
                <label class="font-normal text-lg text-white block mb-3"
                  >Occupation</label
                >
                <input
                  type="text"
                  class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
                  placeholder="Write your occupation here"
                  v-model="form.occupation"
                />
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
                  v-model="form.email"
                />
              </div>
            </div>
            <div class="mb-6">
              <div class="mb-4">
                <label class="font-normal text-lg text-white block mb-3"
                  >Password</label
                >
                <input
                  @keyup.enter="register"
                  type="password"
                  class="auth-form focus:outline-none focus:bg-purple-hover focus:shadow-outline focus:border-purple-hover-stroke focus:text-gray-100"
                  placeholder="Type your password here"
                  v-model="form.password"
                />
              </div>
            </div>
            <div class="mb-6">
              <div class="mb-4">
                <button
                  type="submit"
                  class="block w-full bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 text-lg rounded-full"
                >
                  Continue Sign Up
                </button>
              </div>
            </div>
            <div class="text-center">
              <p class="text-white text-md">
                Already have account?
                <NuxtLink to="/login" class="no-underline text-orange-button">
                  Sign In
                </NuxtLink>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  </NuxtLayout>
</template>

<script setup>
// definePageMeta({
//   layout: 'auth',
// })

import { ref } from 'vue';
import { useRouter } from 'vue-router';


const form = ref({
  name: '',
  occupation: '',
  email: '',
  password: '',
})

const errorMessage = ref('');
const router = useRouter();
const { signIn } = useAuth()

const register = async () => {
  try {
    const response = await $fetch('/api/v1/users', {
      method: 'POST',
      body: JSON.stringify({
        name: form.value.name,
        occupation: form.value.occupation,
        email: form.value.email,
        password: form.value.password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('register response', response)
    
    
    if (response && response.meta.status === 'success') {
      // Handle success, e.g., redirect to login page
      const signInResponse = await signIn('credentials', {
        email: form.value.email,
        password: form.value.password,
        redirect: false,
      })

      console.log('SignIn response:', signInResponse);

      //Jika sign in berhasil, redirect ke halaman upload
      if (signInResponse && !signInResponse.error) {
        sessionStorage.setItem('token', signInResponse.token);
        try {
          await router.push({
            path: '/upload',
            query: {
              name: form.value.name,
            },
          });
          console.log('Redirect successful');
        } catch (routerError) {
          console.error('Router push failed:', routerError);
          errorMessage.value = 'Terjadi kesalahan saat melakukan redirect.';
        }
      } else {
        // Tangani jika sign in gagal
        errorMessage.value = signInResponse.error || 'Sign in gagal. Silakan coba lagi.';
      }
      // useRouter().push('/upload')
    } else {
      // Handle API errors or response messages
      errorMessage.value = response.message || 'Registrasi gagal. Silakan coba lagi.';
    }
  } catch (error) {
    // Handle network errors or other unexpected errors
    errorMessage.value = 'Terjadi kesalahan. Silakan coba lagi.';
    console.error('Registrasi gagal:', error);
  }
}

</script>

<style scoped>
      .auth-background {
        background-image: url("/sign-up-background.jpg");
        background-position: center;
        background-size: cover;
      }
</style>
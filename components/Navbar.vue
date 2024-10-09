<template>
  <header class="sticky top-0 z-50 bg-blue-700 py-1 flex items-center">
    <div class="container mx-auto flex items-center ">
    <div style="height: 54px" class="pr-5">
      <img src="/logo.svg" alt="logo" class="h-full" />
    </div>
    <ul class="flex items-center">
      <li>
        <NuxtLink
          class="text-white hover:text-teal-500 text-lg px-4 py-3"
          to="/"
        >Home</NuxtLink>
      </li>
      <li>
        <NuxtLink
          class="text-white hover:text-teal-500 text-lg px-4 py-3"
          to="/projects/all-campaigns"
        >Projects</NuxtLink>
      </li>
      <li>
        <a
          class="text-white hover:text-teal-500 text-lg px-4 py-3"
          href="#"
        >Features</a>
      </li>
      <li>
        <a
          class="text-white hover:text-teal-500 text-lg px-4 py-3"
          href="#"
        >Success Stories</a>
      </li>
    </ul>

    <!-- Tampilkan Sign Up dan My Account jika user belum login -->
    <ul class="flex ml-auto items-center mt-0" v-if="status !== 'authenticated'">
      <li>
        <NuxtLink
          to="/register"
          class="inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full mr-4"
        >
          Sign Up
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/login"
          class="inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full"
        >
          My Account
        </NuxtLink>
      </li>
    </ul>

    <!-- Tampilkan dropdown jika user sudah login -->
    <div class="flex ml-auto" v-else>
      <div class="dropdown inline-block relative z-10">
        <button 
          class="inline-block bg-transparent hover:bg-white hover:bg-opacity-25 text-white font-semibold py-4 px-6 rounded inline-flex items-center"
          >
          <img 
            v-if="data?.user?.image_url"
            :src="useRuntimeConfig().public.baseURL + '/' + data.user.image_url"
            alt=""
            class="h-8 rounded-full mr-2"
          />
          <span class="ml-2">{{ data?.user?.name }}</span>
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </button>
        <ul 
          class="dropdown-menu absolute hidden text-white pt-1 shadow w-full -mt-2">
          <li class="">
            <nuxt-link
              class="bg-blue-700 hover:bg-gray-100 hover:text-orange-500 py-2 px-4 block whitespace-no-wrap"
              to="/dashboard"
              >My Dashboard</nuxt-link
            >
          </li>
          <li class="">
            <nuxt-link
              class="bg-blue-700 hover:bg-gray-100 border-t hover:text-orange-500 py-2 px-4 block whitespace-no-wrap"
              to="/dashboard"
              >Account Settings</nuxt-link
            >
          </li>
          <li class="">
            <a
              class="cursor-pointer rounded-b bg-blue-700 hover:bg-gray-100 border-t hover:text-orange-500 py-2 px-4 block whitespace-no-wrap"
              @click="signOut({ callbackUrl: '/' })"
              >Logout</a
            >
          </li>
        </ul>
      </div>
    </div>
    </div>
  </header>
</template>

<script setup lang="ts">

const { status, data, signOut, signIn, getSession } = useAuth()

console.log()

</script>

<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>

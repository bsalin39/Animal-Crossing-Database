<script setup>
//import HomePage from '@/views/HomePage.vue'
//import FishiesPage from '@/components/FishiesPage.vue'
</script>

<template>
  <h1 class="text-center text-6xl tracking-widest text-teal-900 opacity-50">🏝️ Island Guide 🏝️</h1>
  <RouterView />
  <body>
    <img class="background-img" src="https://images5.alphacoders.com/956/956578.jpg" />
  </body>
</template>

<style scoped lang="postcss">
.background-img {
  @apply h-screen w-screen opacity-70;
}
</style>

<script setup>
import MainMenu from '@/components/MainMenu.vue'
//import FishiesPage from '@/components/FishiesPage.vue'
// script stuff @layer h-screen background-color:(from-green-200  via-green-300 to-blue-500); ;
</script>

<template>
  <h1 class="text-center text-6xl tracking-widest text-teal-900 opacity-50">🏝️ Island Guide 🏝️</h1>
  <main>
    <div class="card">
      <RouterView />

      <MainMenu /><img class="bg-img" src="https://images5.alphacoders.com/956/956578.jpg" />
    </div>
  </main>
</template>

<style scoped lang="postcss">
.bg-img {
  @apply opacity-70;
}
</style>

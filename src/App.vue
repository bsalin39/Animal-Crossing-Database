<script setup>
import HomeMenu from '@/components/HomeMenu.vue'
//import FishMenu from '@/components/FishMenu.vue'
</script>

<template>
  <HomeMenu />
  <body>
    <img class="background-img" src="https://images5.alphacoders.com/956/956578.jpg" />
  </body>

  <RouterView />
</template>

<style scoped lang="postcss">
body {
  .background-img {
    @apply flex items-center justify-center opacity-50;
  }
}
</style>

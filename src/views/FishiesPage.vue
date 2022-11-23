<script setup>
//import { ref } from 'vue'
//import FreshwaterFish from '@/views/FreshwaterFish.vue'
//import SaltwaterFish from '@/views/SaltwaterFish.vue'
</script>

<script setup></script>

<template>
  <div class="fishcards">
    <RouterLink v-for="n in 12" :key="n" :to="`/fish/${n}`" class="fish">Fish - {{ n }} </RouterLink>
  </div>
</template>

<style lang="postcss" scoped>
.fishcards {
  @apply float-right grid flex-grow grid-cols-4 gap-x-4 gap-y-4;
  & .fish {
    @apply flex h-32 w-40 items-center justify-center rounded-lg border-4 border-green-500 py-4 font-bold uppercase text-slate-600 transition-colors duration-300;
    &:hover {
      @apply cursor-pointer border-red-500 bg-red-500 text-white;
    }
  }
}
</style>

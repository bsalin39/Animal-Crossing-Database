<script setup>
import { onMounted } from 'vue'
import FishCard from '@/components/FishCard.vue'
import useFish from '@/composables/useFish'

//import { ref } from 'vue'
//import FreshwaterFish from '@/views/FreshwaterFish.vue'
//import SaltwaterFish from '@/views/SaltwaterFish.vue'
//  <div class="fishcards">
//   <RouterLink v-for="n in 12" :key="n" :to="`/fish/${n}`" class="fish">Fish - {{ n }} </RouterLink>
//  </div>

const { fish, fetchFishes, firstLoad } = useFish()

onMounted(async () => {
  if (firstLoad.value) {
    await fetchFishes()
    firstLoad.value = false
  }
})
</script>

<template>
  <button
    title="Load Fishes"
    class="z-90 fixed bottom-8 right-8 flex h-20 w-20 items-center justify-center rounded-full bg-green-600 text-4xl text-white drop-shadow-lg duration-300 hover:scale-110 hover:bg-green-700 hover:drop-shadow-2xl"
    @click="fetchFishes"
  >
    🚋
  </button>
  <div class="container mx-auto grid grid-cols-8 gap-4 py-8">
    <FishCard v-for="fishes in fish" :key="fishes.fishID" :fish="fish" />
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

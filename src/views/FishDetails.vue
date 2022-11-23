<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import useFish from '@/composables/useFish.vue'

const route = useRoute()
const { fetchFish, currentFish } = useFish()
onMounted(async () => {
  await fetchFish(route.params.fishID)
})
onUnmounted(() => {
  currentFish.value = null
})
</script>

<template>
  <div v-if="currentFish" class="flex flex-col items-center justify-center gap-6">
    <img :src="currentFish.image_uri" :alt="currentFish.name" />
    <h1 class="text-white-800 text-6xl font-bold">Hi, I'm {{ currentFish.name }}</h1>
    <pre>{{ currentFish }}</pre>
  </div>
</template>

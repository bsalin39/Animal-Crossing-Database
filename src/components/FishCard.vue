<script setup>
const props = defineProps({
  fish: {
    type: Object,
    default: () => ({
      fishID: -1,
      name: 'Unknown',
      image_uri: 'https://acnhapi.com/v1/images/fish',
    }),
  },
})
</script>

<template>
  <RouterLink :to="`/fish/${props.fish.fishID}`" class="rounded-lg bg-white shadow-lg">
    <img class="w-full rounded-t-lg object-cover" :src="props.fish.image_uri" />
    <div class="p-4">
      <h2 class="text-2xl font-semibold text-gray-800">
        {{ props.fish.name }}
      </h2>
    </div>
  </RouterLink>
</template>

<script setup></script>

<template>
  <h1 class="content">I'm fish page</h1>
  <div class="fishcards">
    <RouterLink v-for="n in 25" :key="n" :to="`/fish/${n}`" class="fish">Fish - {{ n }}</RouterLink>
  </div>
</template>

<style lang="postcss" scoped>
.content {
  @apply text-6xl font-thin text-slate-800;
}

.fishcards {
  @apply grid flex-grow grid-cols-5 gap-x-4 gap-y-4;
  & .fish {
    @apply flex h-32 w-40 items-center justify-center rounded-lg border-4 border-green-500 py-4 font-bold uppercase text-slate-600 transition-colors duration-300;
    &:hover {
      @apply cursor-pointer border-red-500 bg-red-500 text-white;
    }
  }
}
</style>

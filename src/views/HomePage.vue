<script setup></script>

<template>
  <div class="menu">
    <RouterLink class="menu-button" to="/home">Home</RouterLink>
    <RouterLink class="menu-button" to="/fish">Fish</RouterLink>
    <RouterLink class="menu-button" to="/bugs">Critters</RouterLink>
    <RouterLink class="menu-button" to="/art">Art</RouterLink>
  </div>
</template>

<style scoped lang="postcss">
.menu {
  @apply flex gap-2;
  & .menu-button {
    @apply flex w-screen rounded-md bg-yellow-200 px-2 py-1 text-center text-2xl font-bold tracking-wider text-slate-900 opacity-40;

    &:hover {
      @apply cursor-pointer border-red-500 bg-red-500 text-white;
    }
  }
}
</style>

<script setup>
import { ref } from 'vue'
const brand = ref('Island Guide 🏝️')
/*    
-- template stuff
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/fish">Fish</RouterLink>
    <RouterLink to="/saltwater">Sea Creatures</RouterLink>
    <RouterLink to="/freshwater">Freshwater Fish</RouterLink>
    <RouterLink to="/bugs">Critters</RouterLink>
    <RouterLink to="/art">Art</RouterLink>
*/
</script>

<template>
  <nav>
    <div class="wrapper">
      <div class="brand">
        <span class="brand-title">{{ brand }}</span>
      </div>

      <div class="menu">
        <a href="#" class="menu-item">Home</a>
        <a href="#" class="menu-item">Fish</a>
        <a href="#" class="menu-item">Critters</a>
        <a href="#" class="menu-item">Art</a>
        <a href="#" class="menu-login">Login</a>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="postcss">
nav {
  @apply flex h-20 bg-transparent text-slate-200;
  .wrapper {
    @apply container mx-auto flex w-full items-center justify-between;
    .brand {
      &-title {
        @apply text-4xl font-bold text-teal-500 opacity-40;
      }
    }
    .menu {
      @apply flex gap-2;
      &-item {
        @apply rounded-md bg-yellow-200 px-2 py-1 text-slate-900 opacity-40;
      }
      &-login {
        @apply rounded-md bg-yellow-200 px-2 py-1 text-slate-900 opacity-40;
      }
      &-logout {
        @apply mx-2 rounded-md bg-gray-700 px-2 py-1 text-red-100;
      }
    }
  }
}
</style>

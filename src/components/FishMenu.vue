<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/saltwater">Sea Creatures</RouterLink>
    <RouterLink to="/freshwater">Freshwater Fish</RouterLink>
  </nav>

    <main class="flex min-h-screen items-center justify-center">
    <h1 class="text-6xl font-thin text-slate-800">I'm FishMenu page</h1>
  </main>
</template>

<style lang="postcss" scoped>
nav {
  @apply flex justify-center space-x-4;

  & .router-link-active {
    @apply underline underline-offset-4;
  }
}
</style>
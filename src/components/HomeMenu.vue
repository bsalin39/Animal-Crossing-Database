<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/fish">Fish</RouterLink>
    <RouterLink to="/saltwater">Sea Creatures</RouterLink>
    <RouterLink to="/freshwater">Freshwater Fish</RouterLink>
    <RouterLink to="/bugs">Critters</RouterLink>
    <RouterLink to="/art">Art</RouterLink>
    
  </nav>
</template>

<style lang="postcss" scoped>
nav {
  @apply flex justify-center space-x-4;

  & .router-link-active {
    @apply underline underline-offset-4;
  }
}
</style>

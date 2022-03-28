<script setup lang="ts">
import Main from '~/pages/Main.vue'
</script>
<template>
  <Suspense>
    <Main />
  </Suspense>
</template>

<style>
#app {
  @apply min-h-100vh min-w-[320px] max-w-full pb-12;
}
</style>

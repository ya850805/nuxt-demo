<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>

    {{ foo }}
  </div>
</template>

<script setup lang="ts">
//auto import
const foo = useFoo()
</script>

<style scoped>

</style>
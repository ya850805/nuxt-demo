<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>

    {{ foo }}

    <GoodItem></GoodItem>

    {{ config.public.var2 }}
  </div>
</template>

<script setup lang="ts">

//auto import
const foo = useFoo()

const config = useRuntimeConfig()
</script>

<style scoped>

</style>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>

    {{ foo }}

    <GoodItem></GoodItem>

    {{ config.public.var2 }}

    <hr>

    <input type='text' v-model="message" /> <br>
    <button @click="sendLineNotify">發送Line notify</button>
  </div>
</template>

<script setup lang="ts">

//auto import
const foo = useFoo()

const config = useRuntimeConfig()

const message = ref('123')
function sendLineNotify() {

  useFetch(`/api/sendLineNotify`, {
    method: 'post',
    body: {
      'message' : message
    }
  })
}
</script>

<style scoped>

</style>
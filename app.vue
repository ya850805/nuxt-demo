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
    <button @click="lineBotSendMessage">line bot發送消息</button>
    <button @click="getLineUserProfile">取得line user profile</button>
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

function lineBotSendMessage() {
  useFetch('/api/lineBotPush', {
    method: 'post',
    body: {
      'message' : message
    }
  })
}

async function getLineUserProfile() {
  const {data, pending, error, refresh} = await useFetch('/api/getLineUserProfile', {
    method: 'post',
    body: {
      'message' : message
    }
  })

  const user: any = data.value
  console.log(user.userId)
  console.log(user.displayName)
  console.log(user.pictureUrl)
  console.log(user.statusMessage)
  console.log(user.language)
}
</script>

<style scoped>

</style>
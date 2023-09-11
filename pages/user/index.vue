<template>
  <div>
    <h1>This is default user page.</h1>
    <NuxtLink to="/user/1">user-1(NuxtLink頁面不刷新)</NuxtLink> <br>
    <a href="/user/2">user-2(a標籤頁面刷新)</a> <br>

    <ul>
      <li v-for="id in [1,2,3]">
        <NuxtLink :to="{ path : `/user/${id}` }">
          user-{{ id }}
        </NuxtLink>
      </li>
    </ul>

    <button @click="goUser3">user-3</button>
  </div>
</template>

<script setup lang="ts">
function goUser3() {
  navigateTo({
    path: '/user/3'
  })
}
</script>

<style scoped>

</style>
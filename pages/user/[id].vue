<template>
  <div>
    <h1>User page</h1>

    請求路徑：http://localhost:3000/user/1?name=jason <br>
    id={{ $route.params.id }} <br>
    name={{$route.query.name}}
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
console.log(route.params)
console.log(route.query)
</script>

<style scoped>

</style>
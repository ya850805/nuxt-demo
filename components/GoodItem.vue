<template>
  <div>
    good
  </div>
</template>

<script setup>
import {useCookie} from "nuxt/app";

const counter = useCookie('counter')
counter.value = counter.value || Math.round(Math.random() * 1000)
</script>

<style scoped>

</style>
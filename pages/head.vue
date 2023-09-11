<template>
  <Title>這是Title(使用標籤最優先)</Title>
  <h1>This is head demo pages</h1>
</template>

<script setup lang="ts">
useHead({
  title: 'This is title',
  meta: [
    { name: 'description', content: 'meta description' },
    { name: 'keyword', content: 'meta keyword' }
  ],
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Site Title` : 'Site Title';
  },
  bodyAttrs: {
    class: 'test'
  },
  script: [
    {
      src: '/a.js',
      tagPosition: 'bodyClose'
    }
  ]
})
</script>

<style>
.test {
  color: red
}
</style>
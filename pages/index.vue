<script setup lang="ts">
const { data } = await useFetch('/api/example', {
  method: 'post',
  body: {
    name: 'Alex',
    id: 1
  }
})
</script>

<template>
  <div>
    <h1>Home page</h1>
    <Alert color="primary">
      {{ data.mes }}
    </Alert>
  </div>
</template>

<style scoped>
h1 {
  color: pink;
}
</style>
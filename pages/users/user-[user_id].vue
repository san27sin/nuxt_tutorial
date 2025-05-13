<script setup lang="ts">
const { user_id } = useRoute().params
definePageMeta({
  layout: 'users'
})
</script>

<template>
  <div>
    <h1>ID of user: {{ user_id }}</h1>
  </div>
</template>

<style scoped>
h1 {
  color: green;
}
</style>
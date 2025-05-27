<script setup>
  definePageMeta({
    layout: 'users'
  })

  const { data } = await useFetch(`https://dummyjson.com/users`)
  const users = ref(data.value.users)
</script>

<template>
  <div>
    <h1>All users</h1>
    <ul class="d-flex flex-wrap list-unstyled gap-3">
      <li
          v-for="user in users"
          :key="user.id"
      >
        <NuxtLink
            class="btn btn-primary"
            :to="`/users/user-${ user.id }`"
        >
          {{ user.firstName }} {{ user.lastName }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  color: pink;
}
</style>
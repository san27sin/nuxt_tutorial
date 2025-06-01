<script setup lang="ts">
definePageMeta({
  layout: 'users'
})

const { user_id } = useRoute().params

const { data } = await useFetch(`https://dummyjson.com/users/${user_id}`)
</script>

<template>
  <div class="row justify-content-center">
    <Head>
      <Title>User ID: {{ user_id }}</Title>
      <Meta name="description" content="All users">
    </Head>
    <div class="col-md-6">
      <div class="card h-100">
        <img :src="data.image" class="card-img-top" :alt="`${data.firstName} ${data.lastName}`">
        <div class="card-body">
          <h5 class="card-title">{{ data.firstName }} {{ data.lastName }}</h5>
          <p class="card-text">
            <strong>Age:</strong> {{ data.age }}<br>
            <strong>Email:</strong> {{ data.email }}<br>
            <strong>Phone:</strong> {{ data.phone }}<br>
            <strong>Company:</strong> {{ data.company.name }}<br>
            <strong>Role:</strong> {{ data.company.title }}<br>
            <strong>Location:</strong> {{ data.address.city }}, {{ data.address.state }}, {{ data.address.country }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  color: green;
}
</style>
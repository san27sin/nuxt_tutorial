 <script setup>
const { user } = defineProps(['user'])
 </script>

 <template>
   <div class="card h-100 shadow-sm">
     <img
       class="card-img-top"
       :src="user.image"
        alt="User Image"
     />
     <div class="card-body">
       <h5 class="card-title">{{ user.firstName }} {{ user.lastName }}</h5>
       <p class="card-text text-muted">Age: {{ user.age }} | {{ user.gender }}</p>
       <p><strong>Email:</strong>{{ user.email }}</p>
       <NuxtLink
         class="btn btn-primary"
         :to="`/users/user-${user.id}`"
       >
         View user
       </NuxtLink>
     </div>
   </div>
 </template>

 <style>

 </style>
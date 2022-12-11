<script>
  export default {
    name: "Thumb",
    props: {
      location: Object
    }
  }
</script>

<template>
  <router-link :to="{name: 'logement', params: {id: location.id}}">
    <img :src="location.cover" :alt="location.title" class="thumb-image">
    <p class="thumb-title">{{ location.title }}</p>
  </router-link>
</template>
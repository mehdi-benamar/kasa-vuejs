<script>


export default {
  name: "Thumb",
  props: {
    location: Object
  }
}
</script>

<template>
      <img :src="location.cover" :alt="location.title" class="thumb-image">
      <p class="thumb-title">{{ location.title }}</p>
</template>
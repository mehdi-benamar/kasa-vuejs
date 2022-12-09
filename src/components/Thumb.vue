<script>


export default {
  name: "Thumb",
  props: {
    title: String,
    cover: String
  }
}
</script>

<template>
    <div class="thumb">
      <img :src="cover" :alt="title" class="thumb-image">
      <p class="thumb-title">{{ title }}</p>
    </div>
</template>
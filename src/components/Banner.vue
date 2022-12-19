<script>

export default {
  name: "Banner",
  props: {
    text: {
      type: String,
      default: ""
    },
    imagebanner: {
      type: String,
      default: ""
    }
  },
  data(){
    return{
      imageSource: "./src/assets/"
    }
  }
}
</script>

<template>
  <section class="banner">
    <img :src="imageSource + imagebanner" alt="image de la bannière" class="banner-image">
    <h1 class="banner-title">{{ text }}</h1>
  </section>
</template>
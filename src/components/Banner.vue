<script>

export default {
  name: "Banner",
  props: {
    text: {
      type: String,
      default: ""
    }
  }
}
</script>

<template>
  <section class="banner">
    <div class="banner-image">
      <h1 class="banner-title">{{ text }}</h1>
    </div>
  </section>
</template>
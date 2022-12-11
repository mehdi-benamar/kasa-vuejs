<script>
import Thumb from "./Thumb.vue"

export default {
  name: "Thumbs",
  components: {
    Thumb
  }
}
</script>

<template>
    <section class="thumbs">
      <Thumb title="titre de la location" cover="https://picsum.photos/200/300"/>
      <Thumb title="titre de la location" cover="https://picsum.photos/200/300"/>
      <Thumb title="titre de la location" cover="https://picsum.photos/200/300"/>
      <Thumb title="titre de la location" cover="https://picsum.photos/200/300"/>
      <Thumb title="titre de la location" cover="https://picsum.photos/200/300"/>
      <Thumb title="titre de la location" cover="https://picsum.photos/200/300"/>
      <Thumb title="titre de la location" cover="https://picsum.photos/200/300"/>
    </section>
</template>
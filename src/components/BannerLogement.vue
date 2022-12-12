<script>
import LeftArrow from "./icons/IconLeftArrow.vue"
import RightArrow from "./icons/IconRightArrow.vue"

export default {
  name: "BannerLogement",
  components: {
    LeftArrow,
    RightArrow
  }
}
</script>

<template>
    <section class="bannerLog">
      <img src="https://picsum.photos/550/415" alt="" class="bannerLog-image">
      <small class="bannerLog-count">1/4</small>
      <LeftArrow />
      <RightArrow />
    </section>
</template>
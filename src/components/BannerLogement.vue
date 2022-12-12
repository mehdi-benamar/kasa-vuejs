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
      <img src="https://picsum.photos/200/300" alt="" class="bannerLog-image">
      <small class="bannerLog-total">1/4</small>
      <LeftArrow />
      <RightArrow />
    </section>
</template>
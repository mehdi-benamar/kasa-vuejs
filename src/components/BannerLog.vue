<script>
import LeftArrow from "./icons/IconLeftArrow.vue"
import RightArrow from "./icons/IconRightArrow.vue"

export default {
  name: "BannerLog",
  components: {
    LeftArrow,
    RightArrow
  },
  data(){
    return{
      location: {},
      posImage: 0
    }
  },
  async created(){
    const response = await fetch("../src/data/logements.json")
    const locations = await response.json()  
    this.location = locations.find(loc => loc.id === this.$route.params.id)
    // console.log(this.location)
    
  }
}
</script>

<template>
    <section class="bannerLog">
      <img src="" alt="" class="bannerLog-image">
      <small class="bannerLog-count">1/{{ location.pictures.length }}</small>
      <LeftArrow />
      <RightArrow />
    </section>
</template>
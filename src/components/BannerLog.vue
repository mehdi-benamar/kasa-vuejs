<script>
import LeftArrow from "./icons/IconLeftArrow.vue"
import RightArrow from "./icons/IconRightArrow.vue"

export default {
  name: "BannerLog",
  components: {
    LeftArrow,
    RightArrow
  },
  props: {
    locations: Array
  },
  data(){
    return{
      posImage: 0,
      posDisplay: 1
    }
  },
  methods:{
    next(){
      this.posImage++
      this.posDisplay++
      
      if(this.posImage === this.locations[0].pictures.length ){
        this.posImage = 0
        this.posDisplay = 1
      }
    },

    previous(){
      this.posImage--
      this.posDisplay--
      
      if(this.posDisplay === 0){
        this.posDisplay = this.locations[0].pictures.length
      }

      if(this.posImage < 0 ){
        this.posImage = this.locations[0].pictures.length - 1
      }
    }
  }
}
</script>

<template>
    <section class="bannerLog" v-for="loc in locations">
      <img :src="loc.pictures[posImage]" alt="ensemble des pièces de la location" class="bannerLog-image">
      <small class="bannerLog-count">{{ posDisplay }}/{{ loc.pictures.length }}</small>
      <LeftArrow @click="previous" v-if="loc.pictures.length > 1" />
      <RightArrow @click="next" v-if="loc.pictures.length > 1" />
    </section>
</template>
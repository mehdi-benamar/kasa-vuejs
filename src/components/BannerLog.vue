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
      loc: {pictures: []},
      posImage: 0,
      posDisplay: 1
    }
  },
  async mounted(){
    const response = await fetch("../src/data/logements.json")
    const locations = await response.json() 
     this.loc = locations.find(loc => loc.id === this.$route.params.id)
    return this.loc
  },

  methods:{
    next(){
      this.posImage++
      this.posDisplay++
      
      if(this.posImage === this.loc.pictures.length ){
        this.posImage = 0
        this.posDisplay = 1
      }
    },

    previous(){
      this.posImage--
      this.posDisplay--
      
      if(this.posDisplay === 0){
        this.posDisplay = this.loc.pictures.length
      }

      if(this.posImage < 0 ){
        this.posImage = this.loc.pictures.length - 1
      }
    }
  }
}
</script>

<template>
    <section class="bannerLog">
      <img :src="loc.pictures[posImage]" alt="ensemble des pièces de la location" class="bannerLog-image">
      <small class="bannerLog-count">{{ posDisplay }}/{{ loc.pictures.length }}</small>
      <LeftArrow @click="previous" v-if="loc.pictures.length > 1" />
      <RightArrow @click="next" v-if="loc.pictures.length > 1" />
    </section>
</template>
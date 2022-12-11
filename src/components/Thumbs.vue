<script>
import Thumb from "./Thumb.vue"

export default {
  name: "Thumbs",
  components: {
    Thumb
  },
  data(){
    return {
      locations: []
    }
  },
  async created(){
      const response = await fetch("../src/data/logements.json")
      const locations = await response.json() 
      this.locations = locations
  }
}
</script>

<template>
    <section class="thumbs">
      <div class="thumb" v-for="location in locations">
        <Thumb :location="location" />
      </div>
    </section>
</template>
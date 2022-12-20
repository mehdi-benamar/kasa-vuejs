<script>
import Thumb from "./Thumb.vue"
import data from "../data/logements.json"

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
      data.map(({id, cover, title}) => {
        this.locations.push({id, cover, title})
      })
      return this.locations
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
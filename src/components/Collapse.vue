<script>
import CollapseArrow from "./icons/IconCollapseArrow.vue"

export default {
  name: "Collapse",
  components: {
    CollapseArrow
  },
  props:{
    title: String,
    description: String
  },
  data(){
    return{
      opacity: "",
      degres: "0"
    }
  },
  methods: {
    display(){
      this.opacity === "" ? this.opacity = "toggle-opacity" : this.opacity = ""
      this.degres === "180" ? this.degres = "0" : this.degres = "180"
    }
  }
}

</script>

<template>
    <div class="collapse-container">
      <div class="collapse-header" @click="display">
      <p class="collapse-title">{{ title }}</p>
      <CollapseArrow :style="{transform: `rotate(${degres}deg)`}"/>
    </div>
    <div class="collapse-description" :class="opacity">{{ description }}</div>
    </div>
</template>
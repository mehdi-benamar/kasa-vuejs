<script>
import CollapseArrow from "./icons/IconCollapseArrow.vue"

export default {
  name: "CollapseList",
  components: {
    CollapseArrow
  },
  props: {
    title: String,
    equipments: Array,
  },
  data() {
    return {
      opacity: "",
      degres: "0"
    }
  },
  methods: {
    display() {
      this.opacity === "" ? this.opacity = "toggle-opacity" : this.opacity = ""
      this.degres === "180" ? this.degres = "0" : this.degres = "180"
    }
  }
}

</script>

<template>
  <div class="collapseList-container">
    <div class="collapseList-header" @click="display">
      <p class="collapseList-title">{{ title }}</p>
      <CollapseArrow :style="{ transform: `rotate(${degres}deg)` }" />
    </div>
    <div class="collapseList-list" :class="opacity">
      <ul>
        <li v-for="equipment in equipments">{{ equipment }}</li>
      </ul>
    </div>
  </div>
</template>
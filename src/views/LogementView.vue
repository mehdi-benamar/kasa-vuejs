<script>
import Header from "../components/Header.vue"
import BannerLog from "../components/BannerLog.vue"
import Host from "../components/Host.vue"

export default {
  name: "Logement",
  components: {
    Header,
    BannerLog,
    Host
  },
  data() {
    return {
      locations: [],
    }
  },
  async created() {
    const response = await fetch("../src/data/logements.json")
    const locations = await response.json()
    const loc = locations.find(loc => loc.id === this.$route.params.id)
    this.locations.push(loc)
  }
}
</script>

<template>
  <Header />
  <BannerLog :locations="locations" />
  <Host :locations="locations" />
</template>
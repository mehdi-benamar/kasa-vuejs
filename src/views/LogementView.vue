<script>
import Header from "../components/Header.vue"
import BannerLog from "../components/BannerLog.vue"
import Host from "../components/Host.vue"
import Footer from "../components/Footer.vue"
import data from "../data/logements.json"

export default {
  name: "Logement",
  components: {
    Header,
    BannerLog,
    Host,
    Footer
  },
  data() {
    return {
      locations: [],
    }
  },
  async created() {

    const loc = data.find(loc => loc.id === this.$route.params.id)
    this.locations.push(loc);

    if(!loc){
      this.$router.push({name: 'error'})
    }
  }
}
</script>

<template>
  <Header />
  <BannerLog :locations="locations" />
  <Host :locations="locations" />
  <Footer />
</template>
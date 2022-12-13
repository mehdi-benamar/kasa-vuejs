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
    }
  }
</script>

<template>
  <Header />
  <BannerLog />
  <Host />
</template>
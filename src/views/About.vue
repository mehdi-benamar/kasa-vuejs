<script>
import Header from "../components/Header.vue"
import Banner from "../components/Banner.vue"
import Footer from "../components/Footer.vue"

export default{
  name: "Error",
  components: {
    Header,
    Banner,
    Footer
  }
}

</script>

<template>
  <Header />
  <Banner imagebanner="./src/assets/bannerAbout.png" />
</template>
<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import Banner from "../components/Banner.vue"
import Thumbs from "../components/Thumbs.vue"

export default {
  components: {
    Header,
    Banner,
    Thumbs,
    Footer
  }
}
</script>

<template>
    <Header />
    <main>
      <Banner text="Chez vous, partout et ailleurs" imagebanner="banner.png"/>
      <Thumbs />
    </main>
    <Footer />
</template>

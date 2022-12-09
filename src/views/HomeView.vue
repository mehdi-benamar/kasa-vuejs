<script>
import Header from "../components/Header.vue"
import Banner from "../components/Banner.vue"
import Thumbs from "../components/Thumbs.vue"

export default {
  components: {
    Header,
    Banner,
    Thumbs
  }
}
</script>

<template>
    <Header />
    <main>
      <Banner text="Chez vous, partout et ailleurs" imagebanner="./src/assets/banner.png"/>
      <Thumbs />
    </main>
</template>

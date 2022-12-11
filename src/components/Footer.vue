<script>
  import Logo from "./icons/IconKasaFooter.vue"

  export default {
    name: "Footer",
    components: {
      Logo
    }
    
  }
</script>

<template>
  <footer class="footer">
    <Logo />
    <p class="footer-text">&copy; Kasa. All rights reserved</p>
  </footer>
</template>
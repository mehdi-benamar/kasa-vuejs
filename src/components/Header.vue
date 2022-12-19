<script>
  import Logo from "./icons/IconKasaHeader.vue"

  export default {
    name: "Header",
    components: {
      Logo
    }
  }
</script>

<template>
  <header class="header">
    <div class="header-logo">
      <Logo />
    </div>
    <nav class="header-nav">
      <ul class="header-list">
        <li><router-link :to="{name: 'home'}">Accueil</router-link></li>
        <li><router-link :to="{name: 'about'}">A propos</router-link></li>
      </ul>
    </nav>
  </header>
</template>
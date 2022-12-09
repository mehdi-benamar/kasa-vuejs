<script>
  import Logo from "./icons/IconKasa.vue"

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
        <li>Accueil</li>
        <li>A propos</li>
      </ul>
    </nav>
  </header>
</template>
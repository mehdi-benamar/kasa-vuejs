<script>
import Header from "../components/Header.vue"

export default{
  name: "Error",
  components: {
    Header
  }
}

</script>

<template>
  <Header />
  <main class="error">
    <h1 class="error-number">404</h1>
    <p class="error-text">Oups! la page que vous demandez n'existe pas.</p>
    <p><router-link :to="{name: 'home'}">Retourner sur la page d'accueil</router-link></p>
  </main>
</template>
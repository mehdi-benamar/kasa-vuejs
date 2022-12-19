<script>
import Header from "../components/Header.vue"
import Banner from "../components/Banner.vue"
import Collapse from "../components/Collapse.vue"
import Footer from "../components/Footer.vue"

export default{
  name: "Error",
  components: {
    Header,
    Banner,
    Collapse,
    Footer
  },
  data(){
    return{
      informations: [
        {
          title: "Fiabilité",
          libelle: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        },
        {
          title: "Respect",
          libelle: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
          title: "Service",
          libelle: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        },
        {
          title: "Sécurité",
          libelle: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
      ]
    }
  }
}

</script>

<template>
  <Header />
  <main class="about">
    <Banner imagebanner="bannerAbout.png" />
    <section class="about-collapse">
      <Collapse v-for="info in informations" :title="info.title" :description="info.libelle"/>
    </section>
  </main>
  <Footer />
</template>
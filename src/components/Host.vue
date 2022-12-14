<script>
import Tag from "./Tag.vue"
import Rating from "./icons/IconRating.vue"

export default {
  name: "Host",
  components: {
    Tag,
    Rating
  },
  props:{
    locations: Array
  },
  methods: {
    splitName(host, pos){
      return host.split(" ")[pos]
    }
  }
}
</script>

<template>
    <section class="host" v-for="loc in locations">
      <div class="host-info">
        <h2>{{ loc.title }}</h2>
        <h3>{{loc.location }}</h3>
      </div>
      <div class="host-profile">
        <div class="host-profile-name">
          <p>{{ splitName(loc.host.name, 0) }}</p>
          <p>{{ splitName(loc.host.name, 1) }}</p>
        </div>
        <img :src="loc.host.picture" alt="Photo du propriétaire" class="host-profile-image">
      </div>
    </section>
    <section class="host-bottom" v-for="loc in locations">
      <div class="host-bottom-tags">
        <Tag v-for="name in loc.tags" :name="name" />
      </div>
      <div class="host-bottom-rating">
        <Rating v-for="(n, i) in 5" :fill="(i + 1) > parseInt(loc.rating) ? 'none' : 'FF6060'"/>
      </div>
    </section>
</template>
<script>
import Tag from "./Tag.vue"
import Rating from "./icons/IconRating.vue"
import Collapse from "./Collapse.vue"
import CollapseList from "./CollapseList.vue"

export default {
  name: "Host",
  components: {
    Tag,
    Rating,
    Collapse,
    CollapseList,
    CollapseList
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
      <div class="host-header">
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
      </div>
      <div class="host-bottom">
        <div class="host-bottom-tags">
          <Tag v-for="name in loc.tags" :name="name" />
        </div>
        <div class="host-bottom-rating">
          <Rating v-for="(n, i) in 5"  :fill="i < parseInt(loc.rating) ? '#FF6060' : '#E3E3E3'" />
        </div>
      </div>
      <div class="collapse">
        <Collapse title="Description" :description="loc.description"/>
        <CollapseList title="Équipements" />
      </div>
    </section>
</template>
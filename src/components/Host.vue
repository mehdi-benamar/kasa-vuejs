<script>
import Tag from "./Tag.vue"
import Rating from "./icons/IconRating.vue"

export default {
  name: "Host",
  components: {
    Tag,
    Rating
  },
  // props:{
  //   title: String,
  //   location: String,

  // }
}
</script>

<template>
    <section class="host">
      <div class="host-info">
        <h2>Title</h2>
        <h3>Location</h3>
        <div class="host-tags">
          <Tag name="test"/>
          <Tag name="test"/>
          <Tag name="test"/>
        </div>
      </div>
      <div class="host-profile">
        <p class="host-profile-name">Prénom<br>Nom</p>
        <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg" alt="" class="host-profile-image">
        <div class="host-profile-rating">
          <Rating />
          <Rating />
          <Rating />
          <Rating />
          <Rating />
        </div>
      </div>
    </section>
</template>
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
      </div>
      <div class="host-profile">
        <div class="host-profile-name">
          <p>Prénom</p>
          <p>Nom</p>
        </div>
        <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg" alt="" class="host-profile-image">
      </div>
    </section>
    <section class="host-bottom">
      <div class="host-bottom-tags">
        <Tag name="test"/>
        <Tag name="test"/>
        <Tag name="test"/>
      </div>
      <div class="host-bottom-rating">
        <Rating />
        <Rating />
        <Rating />
        <Rating />
        <Rating />
      </div>
    </section>
</template>
<script>

export default {
  name: "Tag",
  props:{
    name: String
  }
}
</script>

<template>
    <div class="tag">
      <small class="tag-text">{{ name }}</small>
    </div>
</template>
<template lang="pug">
  .app-icon-image(v-ripple="{ class: 'white--text' }", :style='{height: `${size}px`, width: `${size}px`}')
    img.elevation-8(:src='app.iTunesData.artworkUrl512')
</template>

<script>
  export default {
    props: ['app', 'size']
  }
</script>

<style>
  .app-icon-image > img {
    width: 100%;
  }

  .app-icon-image, .app-icon-image > img {
    border-radius: 22%;
  }
</style>

<template lang="pug">
  .app-icon-image.mx-auto.mb-2(v-ripple="{ class: 'white--text' }", :style='{height: `${size}px`, width: `${size}px`}')
    img.elevation-8(:src='app.iTunesData.artworkUrl512')
</template>

<script>
  export default {
    props: ['app', 'size']
  }
</script>

<style>
  /*.app-icon-image {*/
    /*width: 152px;*/
    /*height: 152px;*/
  /*}*/

  .app-icon-image > img {
    width: 100%;
  }

  .app-icon-image, .app-icon-image > img {
    border-radius: 17%;
  }
</style>

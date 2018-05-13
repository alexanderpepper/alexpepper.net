<template lang="pug">
  .iphone
    .ios-video
      video(:src='app.videoUrl', autoplay, loop)
</template>

<script>
  export default {
    props: ['app']
  }
</script>

<style>
  .iphone {
    background-size: 380px 798px;
    position: relative;
    height: 798px;
    width: 380px;
    background-image: url("https://s3.amazonaws.com/alexpepper.us/images/iphone.png");
  }

  .ios-video {
    position: absolute;
    top: 118px;
    left: 33px;
  }

  .ios-video > video {
    width: 320px;
    height: 568px;
  }

  @media screen and (max-width: 480px) {
    .iphone {
      background-size: 285px 598px;
      height: 598px;
      width: 285px;
    }

    .ios-video {
      top: 88px;
      left: 24px;
    }

    .ios-video > video {
      width: 240px;
      height: 426px;
    }
  }

  @media screen and (max-width: 360px) {
    .iphone {
      background-size: 228px 479px;
      height: 478px;
      width: 228px;
    }

    .ios-video {
      top: 71px;
      left: 20px;
    }

    .ios-video > video {
      width: 192px;
      height: 341px;
    }
  }
</style>

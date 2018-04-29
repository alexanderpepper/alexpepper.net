<template lang="pug">
  v-container.app(fluid)
    v-slide-y-transition(mode='out-in')
      v-layout(row, wrap)
        v-flex(xs12)
          h2.catchy-blurb.text-xs-center(v-text='app.blurb')
        v-flex.app-video(md6, sm12)
          .iphone
            .ios-video
              video(:src='videoUrl', autoplay, loop)
        v-flex.figure.mx-auto(md3, sm4, xs6)
          .figure-content
            .app-screenshot(:style='screenShotStyle(1)')
            p(v-text='app.caption1')
        v-flex.figure.mx-auto(md3, sm4, xs6)
          .figure-content
            a(:href='iTunesUrl', target='_')
              .app-store-badge
            .app-icon(:style='appIconStyle')
            p(v-text='app.iCloudCaption')
        v-flex.figure.mx-auto(md3, sm4, xs6)
          .figure-content
            .app-screenshot(:style='screenShotStyle(2)')
            p(v-text='app.caption2')
        v-flex.figure.mx-auto(md3, sm4, xs6)
          .figure-content
            .app-screenshot(:style='screenShotStyle(3)')
            p(v-text='app.caption3')
        v-flex.figure.mx-auto(md3, sm4, xs6)
          .figure-content
            .app-screenshot(:style='screenShotStyle(4)')
            p(v-text='app.caption4')
        v-flex.figure.mx-auto(md3, sm4, xs6)
          .figure-content
            .app-screenshot(:style='screenShotStyle(5)')
            p(v-text='app.caption5')
        v-flex(xs12)
          h4.text-xs-center {{ app.name }} is a universal app with a separate interface to take advantage of the extra room an iPad can offer
          .app-screenshot-ipad
            img(:src='iPadScreenShotUrl')
</template>

<script>
  import apps from '../constants/apps'
  import s3 from '../constants/s3'
  export default {
    props: ['id', 'setTitle'],
    data () {
      return {
        app: {}
      }
    },
    created () {
      this.initialize()
    },
    watch: {
      $route: {
        handler () {
          this.initialize()
        }
      }
    },
    computed: {
      videoUrl () {
        return `${s3}/videos/${this.id}.mov`
      },
      iTunesUrl () {
        return `https://itunes.apple.com/us/app/${this.app.path}`
      },
      appIconStyle () {
        return {'background-image': `url(${s3}/images/${this.id}-artwork.png)`}
      },
      iPadScreenShotUrl () {
        return `${s3}/images/${this.id}-ipad.png`
      }
    },
    methods: {
      initialize () {
        this.app = apps.filter(app => app.id === this.id)[0]
        this.setTitle(this.app.name)
      },
      screenShotStyle (index) {
        return {'background-image': `url(${s3}/images/${this.id}-${index}.png)`}
      }
    }
  }
</script>

<style scoped>
  .app-store-badge {
    background-image: url("https://s3.amazonaws.com/alexpepper.us/images/app-store-badge.png");
    width: 232px;
    height: 81px;
    background-size: 232px 81px;
    margin: 0 auto 14px auto;
  }

  .iphone {
    background-size: 380px 798px;
    position: relative;
    height: 798px;
    width: 380px;
    margin: 0 auto;
    background-image: url("https://s3.amazonaws.com/alexpepper.us/images/iphone.png");
  }

  .catchy-blurb {
    /*max-width: 800px;*/
    margin: 10px auto 20px auto;
  }

  .figure {
    padding: 0;
  }

  .figure-content {
    width: 232px;
    height: 490px;
    margin: 0 auto;
  }


  .figure-content p {
    line-height: 1.24;
  }

  .app-video {
    margin: 0 auto 16px auto;
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

  .app-icon {
    border-radius: 43px;
    width: 230px;
    height: 230px;
    background-size: 230px 230px;
    margin: 0 auto;
  }

  .app-screenshot {
    width: 232px;
    height: 410px;
    background-size: 232px 410px;
    border: 1px solid black;
  }

  .app-screenshot-ipad {
    border: 1px solid black;
    max-width: 640px;
    margin: 0 auto 30px auto;
  }
  .app-screenshot-ipad img {
    width: 100%;
  }

  @media screen and (max-width: 524px) {
    .figure {
      max-width: 100%;
    }
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

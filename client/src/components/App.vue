<template lang="pug">
  v-container.app(fluid)
    v-slide-y-transition(mode='out-in')
      v-layout(row, wrap)
        v-flex(xs12)
          h2.catchy-blurb.text-xs-center(v-text='app.blurb')
        v-flex(lg4, md5, sm6)
          app-video(:app='app')
        v-flex(lg8, md7, sm6)
          v-carousel.screenshot-carousel.elevation-0
            v-carousel-item.screenshot(v-for='(screenshotUrl, i) in app.screenshotUrls', :src='screenshotUrl', :key='i')
          a(:href='app.iTunesData.trackViewUrl', target='_')
            .app-store-badge
        v-flex(xs3)
          app-icon(:app='app', :size='200')
        v-flex(xs9)
          .description
            span(v-html='app.iTunesData.description')

</template>

<script>
  import apps from '../constants/apps'
  import s3 from '../constants/s3'
  import iTunesService from '../services/iTunesService'
  import AppIcon from './AppIcon'
  import AppVideo from './AppVideo'

  export default {
    props: ['id', 'setTitle'],
    components: {AppIcon, AppVideo},
    data () {
      return {
        app: {
          screenshotUrls: [],
          iTunesData: {}
        }
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
    methods: {
      async initialize () {
        this.app = apps.filter(app => app.id === this.id)[0]
        this.setTitle(this.app.name)
        this.app.videoUrl = `${s3}/videos/${this.id}.mov`
        this.app.iTunesData = await iTunesService.getApp(this.app.iTunesId)
        this.app.iTunesData.description = this.app.iTunesData.description.replace(/\n/g, '<br/>')
        this.app.screenshotUrls = [
          ...this.app.iTunesData.screenshotUrls,
          ...this.app.iTunesData.ipadScreenshotUrls
        ]
      }
    }
  }
</script>

<style scoped>

  .description {
    line-height: 1.2;
  }
  .app-store-badge {
    background-image: url("https://s3.amazonaws.com/alexpepper.us/images/app-store-badge.png");
    width: 232px;
    height: 81px;
    background-size: 232px 81px;
    margin: 0 auto 14px auto;
  }

  .screenshot-carousel {
    width: 500px;
    height: 666px;
  }
</style>

<style>
  .app .screenshot img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }
</style>


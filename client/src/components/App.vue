<template lang="pug">
  v-container.app(fluid)
    v-slide-y-transition(mode='out-in')
      v-layout.mt-3(row, wrap)
        v-flex(xs12)
          h2.catchy-blurb.text-xs-center(v-text='app.blurb')
        v-flex(lg4, md5, sm7)
          app-video.mx-auto.mb-3(:app='app')
        v-flex(lg4, md7, sm5)
          .description.mx-auto
            app-icon.mb-2(:app='app', :size='256')
            .headline.pl-1 {{ app.iTunesData.trackName }}
            .body-1.pl-1.mb-3(v-html='app.iTunesData.description')
            a.app-store-badge(:href='app.iTunesData.trackViewUrl', target='_')
              img(src='/static/app-store-badge.svg')
        v-flex(xs12, sm12, md12, lg4, v-if='app.screenshotUrls && app.screenshotUrls.length')
          .screenshot-carousel.elevation-1.mx-auto
            v-toolbar(dense)
              v-toolbar-title Screenshots
            .pa-3
              v-carousel.elevation-0(interval='2500')
                v-carousel-item.screenshot(v-for='(screenshotUrl, i) in app.screenshotUrls', :src='screenshotUrl', :key='i')
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

  .app {
    max-width: 1300px;
  }

  .description {
    line-height: 1.2;
    max-width: 360px;
  }

  .description img {
    width: 100%;
  }

  .screenshot-carousel {
    background-color: #aaa;
    width: 100%;
    max-width: 540px;
  }
  .app-store-badge img {
    width: 256px;
  }
</style>

<style>
  .app .screenshot img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }
  /*.carousel .carousel__right .btn__content .icon,*/
  /*.carousel .carousel__left .btn__content .icon{*/
    /*color: black;*/
  /*}*/
  /**/
  /*.btn.btn--icon.btn--small.theme--dark.carousel__controls__item.carousel__controls__item--active {*/
    /*color: #ddd;*/
  /*}*/
  /**/
  /*.btn.btn--icon.btn--small.theme--dark.carousel__controls__item {*/
    /*color: black;*/
  /*}*/

  .carousel__controls {
    background-color: transparent;
  }
  /*.flex {*/
    /*border: 1px solid green;*/
  /*}*/

</style>


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
            .headline {{ app.iTunesData.trackName }}
            .body-1.mb-3(v-html='app.iTunesData.description')
            a.app-store-badge(:href='app.iTunesData.trackViewUrl', target='_')
              img(src='/static/app-store-badge.svg')
        v-flex(xs12, sm12, md12, lg4)
          .text-xs-center.headline.mt-4.mb-2 Screenshots
          v-carousel.screenshot-carousel.elevation-8.mx-auto
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

  .description {
    line-height: 1.2;
    max-width: 375px;

  }

  .screenshot-carousel {
    background-color: #ddd;
    width: 500px;
    height: 666px;
  }

  @media (max-width: 600px) {
    .screenshot-carousel {
      width: 375px;
      height: 500px;
    }
  }

  @media (max-width: 428px) {
    .screenshot-carousel {
      width: 300px;
      height: 400px;
    }
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

</style>


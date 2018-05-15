<template lang="pug">
  v-container.app(fluid)
    v-slide-y-transition(mode='out-in')
      v-layout.mt-3(row, wrap)
        v-flex(xs12)
          v-layout.video-description
            v-flex.pb-3(xs12)
              app-video.mx-auto.mb-3(:app='app')
              .text-xs-center
                v-btn(outline, large, @click='showScreenshots = true') Screenshots
            v-flex(xs12)
              .description.pl-3.mx-auto
                app-icon.mb-2(:app='app', :size='256')
                .headline.pl-1 {{ app.iTunesData.trackName }}
                .body-1.pl-1.mb-3(v-html='app.iTunesData.description')
                a.app-store-badge(:href='app.iTunesData.trackViewUrl', target='_')
                  img(src='/static/app-store-badge.svg')

    v-dialog(v-model='showScreenshots', max-width='560px')
      .screenshot-carousel.mx-auto
        v-toolbar.elevation-4r(dense)
          v-toolbar-title Screenshots
          v-spacer
          v-btn(icon, @click='showScreenshots = false')
            v-icon close
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
        showScreenshots: false,
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
    max-width: 800px !important;
  }

  .description {
    line-height: 1.2;
    max-width: 360px;
  }

  .description img {
    width: 100%;
  }

  .screenshot-carousel {
    background-color: #777;
    width: 100%;
  }

  .app-store-badge img {
    width: 256px;
  }
  @media (max-width: 699px) {
    .video-description {
      flex-wrap: wrap !important;
    }
  }
</style>

<style>
  .screenshot img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }

  .carousel__controls {
    background-color: transparent;
  }
</style>


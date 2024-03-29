<template lang="pug">
  v-container.app(fluid)
    v-slide-y-transition(mode='out-in')
      v-layout.mt-3(row, wrap)
        v-flex(xs12)
          v-layout.video-description
            v-flex.pb-3(xs12)
              app-video.mx-auto.mb-3(:app='app')
            v-flex(xs12)
              .description.pl-3.mx-auto
                app-icon.mb-2(:app='app', :size='256')
                .headline.pl-1 {{ app.iTunesData.trackName }}
                v-btn.mx-1.my-2(outlined, @click='showScreenshots = true') View Screenshots
                .body-1.pl-1.mb-3(v-html='app.iTunesData.description')
                a.app-store-badge.mb-1(:href='app.iTunesData.trackViewUrl', :class="{ 'opacity-50 cursor-not-allowed': !app.iTunesData.trackViewUrl }" target='_')
                  img(src='/app-store-badge.svg')
                a.app-store-badge(:href='app.playStoreUrl', target='_', v-if='app.playStoreId')
                  img(src='/google-play-badge.png')
    v-dialog(v-model='showScreenshots', max-width='560px', hide-overlay, :fullscreen='$vuetify.breakpoint.xsOnly', :scrollable='$vuetify.breakpoint.xsOnly', transition='dialog-bottom-transition')
      .screenshot-carousel.mx-auto
        v-toolbar(dense)
          v-toolbar-title {{ app.name }} Screenshots
          v-spacer
          v-btn(icon, @click='showScreenshots = false')
            v-icon close
        .px-3.pb-3
          v-carousel.elevation-0(interval='2500', v-if='app.screenshotUrls && app.screenshotUrls.length' height='100%' )
            v-carousel-item.screenshot.pt-3.pb-12(v-for='(screenshotUrl, i) in app.screenshotUrls', :src='screenshotUrl', :key='i')

</template>

<script>
import AppService from '../services/AppService'
import AppIcon from '../components/AppIcon'
import AppVideo from '../components/AppVideo'

export default {
  props: ['id', 'setTitle'],
  components: { AppIcon, AppVideo },
  data: () => ({
    showScreenshots: false,
    app: {
      screenshotUrls: [],
      iTunesData: {}
    }
  }),
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
      this.app = await AppService.get(this.id)
      this.setTitle(this.app.name)
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
    max-width: 375px;
  }

  .description img {
    width: 100%;
  }

  .screenshot-carousel {
    background-color: #777;
    width: 100%;
  }

  .screenshot {
    padding-bottom: 44px;
  }

  .app-store-badge {
    display: block;
  }

  .app-store-badge img {
    width: 200px;
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
    background-color: transparent !important;
  }

  .cursor-not-allowed {
    cursor: not-allowed !important;
  }

  .opacity-50 {
    opacity: 50%;
  }
</style>

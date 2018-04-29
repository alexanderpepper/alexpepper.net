<template lang="pug">
  v-container(fluid)
    v-slide-y-transition(mode='out-in')
      v-layout(row, wrap)
        v-flex.app-icon-container.my-2(xs6, sm4, md3, v-for='app in apps', :key='app.id')
            .text-xs-center
              router-link.app-icon-image.mx-auto.mb-2(:to='{name: "App", params: {id: app.id}}')
                img(:src='iconUrl(app)')
              .text-xs-center.title {{ app.name }}
</template>

<script>
  import apps from '../constants/apps'
  import s3 from '../constants/s3'
  export default {
    props: ['setTitle'],
    created () {
      this.setTitle('Apps')
    },
    data () {
      return {apps}
    },
    methods: {
      iconUrl (app) {
        return `${s3}/images/${app.id}-small.png`
      }
    }
  }
</script>

<style scoped>
  .app-icon-image {
    width: 152px;
    height: 152px;
  }

  .app-icon-image > img {
    border-radius: 25px;
  }

  @media screen and (max-width: 420px) {
    .app-icon-container {
      flex-basis: 100%;
      max-width: 100%;
    }
  }
</style>

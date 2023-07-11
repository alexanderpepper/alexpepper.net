<template lang="pug">
  v-container.apps(fluid)
    v-slide-y-transition(mode='out-in')
      v-layout(row, wrap)
        v-flex.app-icon-container.my-3(xs6, sm4, md3, v-for='app in apps', :key='app.id')
            .text-center
              router-link(:to='{name: "App", params: {id: app.id}}')
                app-icon.mx-auto.mb-2(:app='app', size='180')
              .headline.mt-2 {{ app.name }}
</template>

<script>
import AppIcon from '../components/AppIcon'
import AppService from '../services/AppService'

export default {
  props: ['setTitle'],
  components: { AppIcon },
  async created () {
    this.setTitle('Apps')
    this.apps = await AppService.all()
  },
  data: () => ({
    apps: {}
  })
}
</script>

<style scoped>
  .apps {
    max-width: 1024px !important;
  }

  @media screen and (max-width: 479px) {
    .app-icon-container {
      flex-basis: 100% !important;
      max-width: 100% !important;
      width: 100% !important;
      min-width: 100% !important;
    }
  }
</style>

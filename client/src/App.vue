<template lang="pug">
  v-app
    v-app-bar.app-toolbar(app, fixed, clipped-left, dense, hide-on-scroll)
      v-app-bar-nav-icon(@click.stop='drawer = !drawer')
      v-toolbar-title(v-text='title')
      v-spacer
      v-btn(icon, @click='toggleTheme')
        v-icon invert_colors

    v-navigation-drawer(disable-resize-watcher, temporary, clipped, v-model='drawer', fixed, app)
      v-list
        v-list-item(ripple, @click='menuItemClicked(item)', value='true', v-for='(item, i) in items', :key='i')
          v-list-item-action
            v-icon(v-html='item.icon')
          v-list-item-content
            v-list-item-title
              .subheading(v-text='item.title')

    v-main
      router-view(:set-title='setTitle')
</template>

<script>
import AppService from '@/services/AppService'

export default {
  name: 'App',
  data: () => ({
    drawer: false,
    items: [],
    title: '',
    isDarkTheme: false
  }),
  async created () {
    if (window.localStorage.dark === undefined) {
      window.localStorage.dark = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'true' : 'false'
    }
    this.$vuetify.theme.dark = window.localStorage.dark === 'true'

    const apps = await AppService.all()
    this.items = [
      {
        icon: 'phone_iphone',
        title: 'Apps',
        name: 'Apps'
      },
      ...apps.map(app => {
        return {
          title: app.name,
          name: 'App',
          id: app.id
        }
      }),
      {
        icon: 'work',
        title: 'Resume',
        name: 'Resume'
      }
    ]
  },
  methods: {
    setTitle (title) {
      this.title = title
    },
    menuItemClicked (item) {
      const route = { name: item.name }
      if (item.id) {
        route.params = { id: item.id }
      }
      this.$router.push(route)
    },
    toggleTheme () {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      window.localStorage.dark = this.$vuetify.theme.dark
    }
  }
}
</script>

<style>

  a {
    color: black;
    text-decoration: none;
  }
</style>

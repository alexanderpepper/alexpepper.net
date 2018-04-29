<template lang="pug">
  v-app(:dark='isDarkTheme', :light='!isDarkTheme')
    v-navigation-drawer(disable-resize-watcher, temporary, clipped, v-model='drawer', fixed, app)
      v-list
        v-list-tile(ripple, @click='menuItemClicked(item)', value='true', v-for='(item, i) in items', :key='i')
          v-list-tile-action
            v-icon(v-html='item.icon')
          v-list-tile-content
            v-list-tile-title(v-text='item.title')
    v-toolbar(app, clipped-left)
      v-toolbar-side-icon(@click.stop='drawer = !drawer')
      v-toolbar-title(v-text='title')
      v-spacer
      v-btn(icon, @click='isDarkTheme = !isDarkTheme')
        v-icon invert_colors
    v-content
      router-view(:set-title='setTitle')
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      items: [
        {
          icon: 'phone_iphone',
          title: 'Apps',
          name: 'Apps'
        },
        {
          title: 'MusicWatch',
          name: 'App',
          id: 'musicwatch'
        },
        {
          title: 'BookWatch',
          name: 'App',
          id: 'bookwatch'
        },
        {
          title: 'AppWatch',
          name: 'App',
          id: 'appwatch'
        },
        {
          title: 'All Flags',
          name: 'App',
          id: 'all-flags'
        },
        {
          title: 'I Ching',
          name: 'App',
          id: 'i-ching'
        },
        {
          title: 'Tao Te Ching',
          name: 'App',
          id: 'tao-te-ching'
        },
        {
          title: 'Hua Hu Ching',
          name: 'App',
          id: 'hua-hu-ching'
        },
        {
          title: 'Art Of War',
          name: 'App',
          id: 'art-of-war'
        },
        {
          icon: 'work',
          title: 'Resume',
          name: 'Resume'
        }
      ],
      title: '',
      isDarkTheme: false
    }
  },
  methods: {
    setTitle (title) {
      this.title = title
    },
    menuItemClicked (item) {
      const route = {name: item.name}
      if (item.id) {
        route.params = {id: item.id}
      }
      this.$router.push(route)
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

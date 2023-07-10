import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'md'
  },
  theme: {
    themes: {
      light: {
        primary: colors.grey.darken2,
        secondary: colors.grey.lighten2,
        accent: colors.grey.darken4
      },
      dark: {
        primary: colors.grey.lighten2
      }
    }
  }
})

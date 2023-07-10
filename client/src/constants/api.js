const host = process.env.VUE_APP_API_URL

export default {
  apps: `${host}/apps`,
  app: (id) => `${host}/apps/${id}`
}

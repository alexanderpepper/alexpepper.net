const host = process.env.API_URL

export default {
  apps: `${host}/app`,
  app: (id) => `${host}/app/${id}`
}

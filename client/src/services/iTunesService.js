import request from 'superagent'
import apps from '../constants/apps'
const lookupUrl = (id) => `https://itunes.apple.com/lookup?id=${id}`

class iTunesService {
  static async getApp (id) {
    const data = await request.get(lookupUrl(id)).then(res => JSON.parse(res.text))
    return data && data.results && data.results.length && data.results[0]
  }

  static getApps () {
    return Promise.all(apps.map(app => this.getApp(app.iTunesId).then(iTunesData => { return {...app, iTunesData} })))
  }
}

export default iTunesService

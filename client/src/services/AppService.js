import BaseService from './BaseService'
import api from '../constants/api.js'

class AppService extends BaseService {
  static all () {
    return this.GET(api.apps)
  }

  static get (id) {
    return this.GET(api.app(id))
  }
}

export default AppService

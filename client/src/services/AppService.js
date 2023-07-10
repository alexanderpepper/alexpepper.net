import request from 'superagent'
import api from '../constants/api.js'

class AppService {
  static all () {
    return request.get(api.apps)
      .then(response => (response.body && response.body.results) || response.body)
  }

  static get (id) {
    return request.get(api.app(id))
      .then(response => (response.body && response.body.results) || response.body)
  }
}

export default AppService

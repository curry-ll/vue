import * as types from './mutation-types'
export default {
  [types.LOGIN] (state, token) {
    localStorage.setItem('token', token)
    state.token = token
  },
  [types.LOGINOUT] (state) {
    localStorage.removeItem('token')
    state.token = ''
  },
  [types.NAVACTIVE] (state, active) {
    state.navActive = active
  }
}

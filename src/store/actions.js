import * as types from './mutation-types'
export const navActive = ({ commit }, active) => {
  commit(types.NAVACTIVE, active)
}
export const login = ({ commit }, token) => {
  commit(types.LOGIN, token)
}
export const loginout = ({ commit }) => {
  commit(types.LOGINOUT)
}

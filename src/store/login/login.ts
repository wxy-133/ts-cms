import { Module } from 'vuex'
import { ILoginState } from './type'
import { IRootState } from '../types'

const login: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  getters: {},
  actions: {
    accountLoginAction({ commit }, payload: any) {
      console.log('执行accountLoginAction', payload)
    }
  },
  mutations: {}
}

export default login

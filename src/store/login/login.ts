import { Module } from 'vuex'

import { accountLoginRequest } from '../../services/login/login'
import IAccount from '../../services/login/type'
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
    async accountLoginAction({ commit }, payload: IAccount) {
      // console.log('执行accountLoginAction', payload)
      // 1.实现登陆逻辑
      const loginResult = await accountLoginRequest(payload)
      console.log(loginResult)
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('执行phoneLoginAction', payload)
    }
  },
  mutations: {}
}

export default login

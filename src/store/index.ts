import { createStore } from 'vuex'
import { IRootState } from './types'

import login from './login/login'

const store = createStore<IRootState>({
  state: () => {
    return { name: 'coderwhy', password: '123456' }
  },
  mutations: {},
  actions: {},
  modules: {
    login
  }
})

export default store

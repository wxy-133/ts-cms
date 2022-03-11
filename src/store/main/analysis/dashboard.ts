import { Module } from 'vuex'

import {
  getCategoryGoodsCount,
  getCategoryGoodsSale,
  getCategoryGoodsFavor,
  getAddressGoodsSale
} from '@/service/main/analysis/dashboard'

import { IRootState } from './../../types'
import { IDashboardState } from './types'

const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    changeGoodsCount(state, list: any[]) {
      state.categoryGoodsCount = list
    },
    changeGoodsSale(state, list: any[]) {
      state.categoryGoodsSale = list
    },
    changeGoodsFavor(state, list: any[]) {
      state.categoryGoodsFavor = list
    },
    changeAddressSale(state, list: any[]) {
      state.addressGoodsSale = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const categoryCountResult = await getCategoryGoodsCount()
      commit('changeGoodsCount', categoryCountResult.data)
      const categorySaleResult = await getCategoryGoodsSale()
      commit('changeGoodsSale', categorySaleResult.data)
      const categoryFavorResult = await getCategoryGoodsFavor()
      commit('changeGoodsFavor', categoryFavorResult.data)
      const addressGoodsSaleResult = await getAddressGoodsSale()
      commit('changeAddressSale', addressGoodsSaleResult.data)
    }
  }
}

export default dashboardModule

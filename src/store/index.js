import Vue from 'vue'
import Vuex from 'vuex'

// Global
import state from './state'
import actions from './actions'
import mutations from './mutations'

// Modules
import moduleStocks from './modules/stocks'
import modulePortfolio from './modules/portfolio'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  modules: {
    moduleStocks,
    modulePortfolio
  }
})

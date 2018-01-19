
const state = {
  user: 1,
  funds: 1000,
  stocks: []
}

const mutations = {
  SET_PORTFOLIO_STOCKS: function (state, { stocks }) {
    state.stocks = stocks
  },
  BUY_STOCK: function (state, order) {
    let stockEntry = state.stocks.find((stock) => {
      return stock.id === order.stock.id
    })
    const loss = order.stock.price * order.quantity

    // Add the quantity to the existing entry
    if (stockEntry) {
      stockEntry.quantity += order.quantity
    // Add the entry to the stocks
    } else {
      stockEntry = order.stock
      stockEntry.quantity = order.quantity

      state.stocks.push(stockEntry)
    }

    // Remove the funds lost
    state.funds -= loss
  },
  SELL_STOCK: function (state, order) {
    const stockEntry = state.stocks.find((stock) => {
      return stock.id === order.stock.id
    })
    const stockIndex = state.stocks.find((stock) => {
      return stock.id === order.stock.id
    })
    const gain = order.stock.price * order.quantity

    // Add the gain
    state.funds += gain

    // Remove the quantity
    stockEntry.quantity -= order.quantity

    // If there are no more stocks, remove it
    if (stockEntry.quantity <= 0) {
      state.stocks.splice(stockIndex, 1)
    }
  }
}

const actions = {
  LOAD_PORTFOLIO_STOCKS: function ({ commit }) {
    commit('SET_PORTFOLIO_STOCKS', { stocks: state.stocks })
  },
  BUY_STOCK: function ({ commit }, order) {
    commit('BUY_STOCK', order)
  },
  SELL_STOCK: function ({ commit }, order) {
    commit('SELL_STOCK', order)
  }
}

const getters = {
  getPortfolioStocks: function (state) {
    return state.stocks
  },
  getPortfolioFunds: function (state) {
    return state.funds
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

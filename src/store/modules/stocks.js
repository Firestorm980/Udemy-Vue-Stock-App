// Normally, this would come from an API
const stocks = [
  {
    'id': 1,
    'name': 'Fivebridge',
    'history': [],
    'price': 333
  }, {
    'id': 2,
    'name': 'Thoughtmix',
    'history': [],
    'price': 461
  }, {
    'id': 3,
    'name': 'Jayo',
    'history': [],
    'price': 74
  }, {
    'id': 4,
    'name': 'Voolia',
    'history': [],
    'price': 361
  }, {
    'id': 5,
    'name': 'Fanoodle',
    'history': [],
    'price': 279
  }, {
    'id': 6,
    'name': 'Skyndu',
    'history': [],
    'price': 279
  }, {
    'id': 7,
    'name': 'Babbleopia',
    'history': [],
    'price': 221
  }, {
    'id': 8,
    'name': 'Divavu',
    'history': [],
    'price': 497
  }, {
    'id': 9,
    'name': 'Photospace',
    'history': [],
    'price': 355
  }, {
    'id': 10,
    'name': 'Meevee',
    'history': [],
    'price': 417
  }, {
    'id': 11,
    'name': 'Kimia',
    'history': [],
    'price': 298
  }, {
    'id': 12,
    'name': 'Kare',
    'history': [],
    'price': 452
  }, {
    'id': 13,
    'name': 'Jaxspan',
    'history': [],
    'price': 342
  }, {
    'id': 14,
    'name': 'Tambee',
    'history': [],
    'price': 490
  }, {
    'id': 15,
    'name': 'Livepath',
    'history': [],
    'price': 214
  }, {
    'id': 16,
    'name': 'Feedbug',
    'history': [],
    'price': 406
  }, {
    'id': 17,
    'name': 'Zoozzy',
    'history': [],
    'price': 484
  }, {
    'id': 18,
    'name': 'Omba',
    'history': [],
    'price': 488
  }, {
    'id': 19,
    'name': 'Abata',
    'history': [],
    'price': 350
  }, {
    'id': 20,
    'name': 'Dynabox',
    'history': [],
    'price': 249
  }
]

const state = {
  stocks: []
}

const mutations = {
  SET_STOCKS: function (state, { stocks }) {
    state.stocks = stocks
  },
  SET_STOCK_PRICES: function (state) {
    let stocks = state.stocks
    const min = Math.ceil(0)
    const max = Math.floor(1000)

    stocks.forEach(stock => {
      stock.history.push(stock.price)
      stock.price = Math.floor(Math.random() * (max - min + 1)) + min

      if (stock.history.length > 10) {
        stock.history.splice(0, 1)
      }
    })
  }
}

const actions = {
  LOAD_STOCKS: function ({ commit }) {
    commit('SET_STOCKS', { stocks: stocks })
  },
  UPDATE_STOCK_PRICES: function ({ commit }) {
    commit('SET_STOCK_PRICES')
  }
}

const getters = {
  getStocks: function (state) {
    return state.stocks
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}

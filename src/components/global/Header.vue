<template>
  <header class="app-header">
    <p>Logo would go in here.</p>
    <nav class="navigation navigation--main">
      <ul class="list list--inline list--menu">
        <router-link
          tag="li"
          v-if="route.addToAppMenu"
          v-for="route in routes"
          v-bind:key="route.path"
          v-bind:to="route.path"
          exact>
          <a>{{ route.name }}</a>
        </router-link>
      </ul>
    </nav>
    <br>
    <button class="button button--primary button--sm" @click="updateStockPrices">Update Stock Prices</button>
    <br>
    <span>Funds: {{ funds }}</span>
  </header>
</template>

<script>
import routes from '@/router/routes'
import { mapActions } from 'vuex'

export default {
  name: 'Header',
  data: function () {
    return {
      routes
    }
  },
  computed: {
    funds: function () {
      return this.$store.getters.getPortfolioFunds
    }
  },
  methods: {
    ...mapActions({
      updateStockPrices: 'UPDATE_STOCK_PRICES'
    })
  }
}
</script>

<style lang="scss">

</style>

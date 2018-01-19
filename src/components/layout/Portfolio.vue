<template>
  <div class="layout layout--portfolio">
    <h1>Portfolio</h1>

    <ul class='list list--stocks'>
      <li v-for='stock in stocks' v-bind:key='stock.id'>
        <app-stock v-bind:stock='stock' v-bind:portfolio="true"></app-stock>
      </li>
    </ul>
  </div>
</template>

<script>
import Stock from '@/components/partial/Stock.vue'

export default {
  name: 'Portfolio',
  components: {
    appStock: Stock
  },
  computed: {
    stocks: function () {
      return this.$store.getters.getPortfolioStocks
    }
  },
  created: function () {
    this.$store.dispatch('LOAD_PORTFOLIO_STOCKS')
  }
}
</script>

<style lang="scss">

</style>

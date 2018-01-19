<template>
  <div class='layout layout--stocks'>
    <h1>Stocks</h1>

    <ul class='list list--stocks'>
      <li v-for='stock in stocks' v-bind:key='stock.id'>
        <app-stock v-bind:stock='stock'></app-stock>
      </li>
    </ul>

  </div>
</template>

<script>
import Stock from '@/components/partial/Stock.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Stocks',
  components: {
    appStock: Stock
  },
  computed: {
    ...mapGetters({
      stocks: 'getStocks'
    })
  },
  created: function () {
    this.$store.dispatch('LOAD_STOCKS')
  }
}
</script>

<style lang='scss'>

</style>

<template>
  <article class="stock" v-bind:id="'stock_'+stock.id">
    <header class="stock__header">
      <h3 class="stock__heading">
        {{ stock.name }}
      </h3>
      <span class="stock__price">
        ( Price: {{ stock.price }} )
      </span>
      <span class="stock__quantity" v-if="!!portfolio">
        ( Quantity: {{ stock.quantity }} )
      </span>
    </header>
    <form action="#" class="stock__form" v-on:submit.prevent="stockFormSubmit">
      <label :for="'stock_form_quantity_'+stock.id">Quantity:</label>
      <input type="number" name="quantity" :id="'stock_form_quantity_'+stock.id" step="1" v-model="form.quantity" :max="(form.action === 'sell') ? stock.quantity : false" min="0">
      <div v-if="!!portfolio">
        <fieldset>
          <label for=""><input type="radio" name="action" value="buy" v-model="form.action">Buy</label>
          <label for=""><input type="radio" name="action" value="sell" v-model="form.action">Sell</label>
        </fieldset>
        <button class="button button--primary button--sm" type="submit" :disabled="isSubmitButtonDisabled">Submit</button>
      </div>
      <div v-else>
        <button class="button button--primary button--sm" type="submit" :disabled="isSubmitButtonDisabled">Buy</button>
      </div>
    </form>
  </article>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Stock',
  props: [ 'stock', 'portfolio' ],
  data: function () {
    return {
      form: {
        quantity: 0,
        action: 'buy'
      }
    }
  },
  methods: {
    ...mapActions({
      buyStock: 'BUY_STOCK',
      sellStock: 'SELL_STOCK'
    }),
    stockFormSubmit: function () {
      const order = {
        quantity: this.quantity,
        stock: this.stock
      }

      if (this.form.action === 'buy') {
        this.buyStock(order)
      } else {
        this.sellStock(order)
      }

      this.form.quantity = 0
    }
  },
  computed: {
    isSubmitButtonDisabled: function () {
      return (
        this.quantity <= 0 ||
        isNaN(this.quantity) ||
        (this.funds <= this.quantity * this.stock.price && this.form.action === 'buy') ||
        (this.quantity > this.stock.quantity && this.form.action === 'sell')
      )
    },
    funds: function () {
      return this.$store.getters.getPortfolioFunds
    },
    quantity: function () {
      return parseInt(this.form.quantity)
    }
  }
}
</script>

<style lang="scss">
  @import '~styles/global/_global';

  .stock {
    border: 1px solid $gray-lighter;
    border-radius: 0.25rem;
    padding: 1rem;
    display: block;
  }
  .stock__header {

  }
  .stock__heading {

  }
  .stock__price {

  }
  .stock__quantity {

  }
  .stock__form {

  }

</style>

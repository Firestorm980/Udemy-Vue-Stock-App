<template>
  <div id="app">
    <app-header></app-header>
    <main class="app-main">
      <router-view></router-view>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '@/components/global/Header.vue'
import Footer from '@/components/global/Footer.vue'

export default {
  name: 'app',
  components: {
    appHeader: Header,
    appFooter: Footer
  }
}
</script>

<style lang="scss">
@import '~styles/main';
</style>


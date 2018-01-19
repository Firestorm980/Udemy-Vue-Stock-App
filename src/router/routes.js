// Pages
import Home from '@/components/layout/Home.vue'
import Portfolio from '@/components/layout/Portfolio.vue'
import Stocks from '@/components/layout/Stocks.vue'
import NotFound from '@/components/layout/404.vue'

// Export
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    addToAppMenu: true
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
    addToAppMenu: true
  },
  {
    path: '/stocks',
    name: 'Stocks',
    component: Stocks,
    addToAppMenu: true
  },
  {
    path: '*',
    name: '404',
    component: NotFound
  }
]

export default routes

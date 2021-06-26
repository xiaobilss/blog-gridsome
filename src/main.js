// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import 'bootstrap/dist/css/bootstrap-grid.min.css'

import './assets/css/index.css'
import './assets/js/releases'
import './assets/js/scripts'


export default function (Vue, { router, head, isClient }) {
  
  Vue.component('Layout', DefaultLayout)
}

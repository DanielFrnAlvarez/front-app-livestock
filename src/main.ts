import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import "bootstrap";
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/styles.scss'

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')

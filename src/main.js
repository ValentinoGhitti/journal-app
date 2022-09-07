import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bootstrap from './styles/styles.scss'

createApp(App)
  .use(store)
  .use(bootstrap)
  .use(router)
  .mount('#app')

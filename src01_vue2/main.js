import { createApp } from 'vue'
import App from './App.vue'
import store from './vuex/store'

let app = createApp(App)
// 挂载vuex
app.use(store)
app.mount('#app')

import 'normalize.css'
import '@/assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

createApp(App).use(router).mount('#app')

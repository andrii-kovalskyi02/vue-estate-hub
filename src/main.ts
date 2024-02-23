import { createApp } from 'vue'
import { createPinia } from 'pinia'
import bodyScrollLock from '@/plugins/bodyScrollLock'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(bodyScrollLock)

app.mount('#root')

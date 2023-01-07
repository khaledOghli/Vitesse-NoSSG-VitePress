import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import Previewer from 'virtual:vue-component-preview'
import router from './router'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const app = createApp(App)
Object.values(import.meta.glob<{ install: any }>('./modules/*.ts', { eager: true })).forEach(i => i.install?.(app, router))

const head = createHead()

app.use(router)
app.use(head)
app.use(Previewer)
app.mount('#app')

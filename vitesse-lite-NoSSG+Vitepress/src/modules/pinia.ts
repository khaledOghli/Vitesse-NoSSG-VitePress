import { createPinia } from 'pinia'

// Setup Pinia
// https://pinia.vuejs.org/
export const install: any = (app) => {
  debugger
  const pinia = createPinia()
  app.use(pinia)
}

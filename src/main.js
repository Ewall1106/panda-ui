import { createApp } from 'vue'
import App from './App.vue'

import PandaUI from './packages'

createApp(App)
  .use(PandaUI)
  .mount('#app')

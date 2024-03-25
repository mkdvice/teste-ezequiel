import './index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRight, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App)

library.add(faArrowRight, faSpinner);

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')

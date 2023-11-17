import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueMeta from 'vue-meta'
import { router } from './router'
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faFilter, faMagnifyingGlass, faPlay, faServer, faCircleDot, faCircleHalfStroke, faBookmark, faBug } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faFilter, faMagnifyingGlass, faPlay, faServer, faCircleDot, faCircleHalfStroke, faBookmark, faBug)

const app = createApp(App)
app.use(router)
app.use(Antd)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

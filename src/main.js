import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store';
import { router } from './router'
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';
import VueTippy from 'vue-tippy'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faFilter, faMagnifyingGlass, faPlay, faServer, faCircleHalfStroke, faBookmark, faBug, faAngleRight, faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faArrowRight, faMoon, faBars, faUser } from '@fortawesome/free-solid-svg-icons'

import { faCircle, faCircleDot } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faFilter, faMagnifyingGlass, faPlay, faServer, faCircleDot, faCircleHalfStroke, faBookmark, faBug, faAngleRight, faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faArrowRight, faCircle, faMoon, faBars, faUser)

const app = createApp(App)

app.use(router)
app.use(store)
app.use(Antd)
app.use(VueTippy,
    // optional
    {
        directive: 'tippy', // => v-tippy
        component: 'tippy', // => <tippy/>
        componentSingleton: 'tippy-singleton', // => <tippy-singleton/>,
        defaultProps: {
            placement: 'auto-end',
            allowHTML: true,
        }, // => Global default options * see all props
    })
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

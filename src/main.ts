import {createApp} from 'vue'

import vueAxios from 'vue-axios'
import axios from '@/config/axios'

import router from '@/config/router'
import store from '@/config/store'

// element plus
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import element from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/es/locale/lang/zh-cn'

// other
import '@/config/plugins/index'
import sparkline from 'vue-sparklines'

import App from './App.vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app
    .use(vueAxios, axios)
    .use(router)
    .use(store)
    .use(element, {locale})
    .use(sparkline)
    .mount('#app')

export default app
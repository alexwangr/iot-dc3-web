import {createApp} from 'vue'

import Element from 'element-plus'
import 'element-plus/dist/index.css'
//import './element-variables.scss'
import locale from 'element-plus/es/locale/lang/zh-cn'

import Sparkline from 'vue-sparklines'

import App from "@/App"

const app = createApp(App)
app.use(Element, {locale})
app.use(Sparkline)

export default app

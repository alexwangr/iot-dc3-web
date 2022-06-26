import {createApp} from 'vue'

import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'

import App from "@/App"

const app = createApp(App)
app.use(VueHighlightJS)
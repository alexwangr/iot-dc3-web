import {createApp} from 'vue'

import BaiduMap from 'vue-baidu-map'

import App from "@/App"

const app = createApp(App)
app.use(BaiduMap, {
    ak: 'RqLpBSIrlK59PqPsCSUkhnDE6PTlVoz6'
})

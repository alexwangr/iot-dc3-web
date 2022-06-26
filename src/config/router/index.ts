import {createRouter, createWebHashHistory, NavigationGuardNext, RouteLocationNormalized} from 'vue-router'

import commonRouters from './common'
import viewsRouters from './views'
import operateRouters from './operate'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import store from '@/config/store';
import {getStore} from "@/util/store"
import {checkTokenValid} from "@/api/token"
import common from '@/util/common'

NProgress.configure({
    easing: 'ease',
    showSpinner: false
})

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes: [...commonRouters, viewsRouters, ...operateRouters]
})

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    NProgress.start()
    const meta = to.meta || {}
    if (meta.title) {
        document.title = to.meta.title as string
    }

    if (meta.isAuth !== true || from.name === 'login') {
        next()
    } else {
        const token = getStore(common.token_header, false)
        if (!token) {
            next({path: '/login'})
            return
        }

        checkTokenValid(token).then(res => {
            if (res.ok) {
                next()
            } else {
                throw new Error(res.message)
            }
        }).catch((e) => {
            console.warn('用户凭证已过期，请重新登录！', e.message)
            store.dispatch('ClearToken').then(() => next({path: '/login'}))
        })
    }
})

router.afterEach(() => {
    NProgress.done()
})

export default router

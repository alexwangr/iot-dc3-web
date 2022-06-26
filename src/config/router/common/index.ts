import { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        name: 'login',
        path: '/login',
        meta: {
            isAuth: false,
            title: 'DC3 IoT 平台'
        },
        component: () => import('@/components/login/Login.vue')
    },
    {
        name: '403',
        path: '/403',
        meta: {
            isAuth: false,
            title: '403'
        },
        component: () => import('@/components/error/403.vue')
    },
    {
        name: '404',
        path: '/404',
        meta: {
            isAuth: false,
            title: '404'
        },
        component: () => import('@/components/error/404.vue')

    },
    {
        name: '500',
        path: '/500',
        meta: {
            isAuth: false,
            title: '500'
        },
        component: () => import('@/components/error/500.vue')
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/404'
    }
]

export default routes

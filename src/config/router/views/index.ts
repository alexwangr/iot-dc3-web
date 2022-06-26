import { RouteRecordRaw } from 'vue-router'

import Layout from '@/components/layout/Layout.vue';

const routes: RouteRecordRaw = {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
        {
            name: 'home',
            path: '/home',
            meta: {
                isAuth: true,
                title: '首页'
            },
            component: () => import('@/views/home/Home.vue')
        },
        {
            name: 'driver',
            path: '/driver',
            meta: {
                icon: 'Promotion',
                isAuth: true,
                title: '驱动'
            },
            component: () => import('@/views/driver/DriverList.vue')
        },
        {
            name: 'profile',
            path: '/profile',
            meta: {
                icon: 'List',
                isAuth: true,
                title: '模板'
            },
            component: () => import('@/views/profile/ProfileList.vue')
        },
        {
            name: 'device',
            path: '/device',
            meta: {
                icon: 'Management',
                isAuth: true,
                title: '设备'
            },
            component: () => import('@/views/device/DeviceList.vue')
        },
        {
            name: 'pointValue',
            path: '/point_value',
            meta: {
                icon: 'Histogram',
                isAuth: true,
                title: '数据'
            },
            component: () => import('@/views/point/value/PointValueList.vue')
        }
    ]
}

export default routes

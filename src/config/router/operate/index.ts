import { RouteRecordRaw } from 'vue-router';

import Layout from '@/components/layout/Layout.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/home',
        component: Layout,
        children: [
            {
                name: 'dashboard',
                path: '/home/dashboard',
                meta: {
                    icon: 'el-icon-s-home',
                    isAuth: true,
                    title: '看板'
                },
                component: () => import('@/views/dashboard/Dashboard.vue')
            },
            {
                name: 'application',
                path: '/home/application',
                meta: {
                    icon: 'el-icon-s-home',
                    isAuth: true,
                    title: '应用'
                },
                component: () => import('@/views/application/Application.vue')
            }
        ]
    },
    {
        path: '/driver',
        component: Layout,
        children: [
            {
                name: 'driverDetail',
                path: '/driver/detail',
                meta: {
                    icon: 'el-icon-s-promotion',
                    isAuth: true,
                    title: '驱动详情'
                },
                component: () => import('@/views/driver/DriverDetail.vue')
            }
        ]
    },
    {
        path: '/gateway',
        component: Layout,
        children: [
            {
                name: 'gatewayDetail',
                path: '/gateway/detail',
                meta: {
                    icon: 'el-icon-s-platform',
                    isAuth: true,
                    title: '网关详情'
                },
                component: () => import('@/views/gateway/GatewayDetail.vue')
            }
        ]
    },
    {
        path: '/device',
        component: Layout,
        children: [
            {
                name: 'deviceDetail',
                path: '/device/detail',
                meta: {
                    icon: 'el-icon-s-finance',
                    isAuth: true,
                    title: '设备详情'
                },
                component: () => import('@/views/device/DeviceDetail.vue')
            }, {
                name: 'deviceEdit',
                path: '/device/edit',
                meta: {
                    icon: 'el-icon-s-finance',
                    isAuth: true,
                    title: '设备编辑'
                },
                component: () => import('@/views/device/DeviceEdit.vue')
            }
        ]
    },
    {
        path: '/profile',
        component: Layout,
        children: [
            {
                name: 'profileDetail',
                path: '/profile/detail',
                meta: {
                    icon: 'el-icon-s-order',
                    isAuth: true,
                    title: '模板详情'
                },
                component: () => import('@/views/profile/ProfileDetail.vue')
            }, {
                name: 'profileEdit',
                path: '/profile/edit',
                meta: {
                    icon: 'el-icon-s-order',
                    isAuth: true,
                    title: '模板编辑'
                },
                component: () => import('@/views/profile/ProfileEdit.vue')
            }, {
                name: 'pointDetail',
                path: '/profile/point/detail',
                meta: {
                    icon: 'el-icon-s-order',
                    isAuth: true,
                    title: '位号详情'
                },
                component: () => import('@/views/point/PointDetail.vue')
            }, {
                name: 'pointEdit',
                path: '/profile/point/edit',
                meta: {
                    icon: 'el-icon-s-order',
                    isAuth: true,
                    title: '位号编辑'
                },
                component: () => import('@/views/point/PointEdit.vue')
            }
        ]
    }
]

export default routes


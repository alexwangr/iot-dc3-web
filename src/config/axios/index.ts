import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';

import router from '@/config/router';
import store from '@/config/store';

import {ElMessage} from 'element-plus';

const axiosInstance: AxiosInstance = axios.create({
    withCredentials: true,
    headers: {
        Accept: 'application/json', 'Content-Type': 'application/json'
    },
    validateStatus(status): boolean {
        return status >= 200 && status <= 500
    }
})

//HTTP Request拦截
axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
    return config
}, (error: any) => {
    const {response} = error
    if (response) {
        return Promise.reject(response.data)
    } else {
        ElMessage({
            showClose: true,
            message: '网络连接异常,请稍后再试!',
            type: 'warning',
        })
    }
})

//HTTP Response拦截
axiosInstance.interceptors.response.use((response: AxiosResponse) => {
    const ok = response.data.ok || false, status = response.status || 200, message = response.data.message || 'Internal Server Error!'

    if (!ok) {
        if (status === 401) {
            store.dispatch('ClearToken').then(() => router.push({path: '/login'}))
        }
        return Promise.reject(new Error(message))
    }

    return response.data
}, (error: any) => Promise.reject(error))

export default axiosInstance
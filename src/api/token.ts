import axios from '@/config/axios'

import Response from '@/type/response'
import {Login} from '@/type/token'

/**
 * 通过用户名获取 Salt
 *
 * @param name 用户名
 * @returns {AxiosPromise}
 */
export const generateSalt = (name: string) => axios({
    url: 'api/v3/token/salt',
    method: 'post',
    data: {name}
}).then(res => res)

/**
 * 登录
 *
 * @param login {tenant, name, salt, password}
 * @returns {AxiosPromise}
 */
export const generateToken = (login: Login) => axios({
    url: `api/v3/token/generate`,
    method: 'post',
    data: login
}).then(res => res)

/**
 * 注销
 *
 * @param name 用户名
 * @returns {AxiosPromise}
 */
export const cancelToken = (name: string) => axios({
    url: 'api/v3/token/cancel',
    method: 'post',
    data: {name}
}).then(res => res)

/**
 * 校验 Token
 *
 * @param login {name, salt, token}
 * @returns {Promise}
 */
export const checkTokenValid = (login: Login): Promise<Response<string>> => axios({
    url: 'api/v3/token/check',
    method: 'post',
    data: login
})
    .then(res => res)
    .catch(e => {
    })

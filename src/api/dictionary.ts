import request from '@/config/axios';

export const driverDictionary = () => request({
    url: 'api/v3/manager/dictionary/driver',
    method: 'get'
}).then(res => res)

export const profileDictionary = () => request({
    url: 'api/v3/manager/dictionary/profile',
    method: 'get'
}).then(res => res)

export const deviceDictionary = () => request({
    url: 'api/v3/manager/dictionary/device',
    method: 'get'
}).then(res => res)

export const pointDictionary = (parent: string) => request({
    url: 'api/v3/manager/dictionary/point/' + parent,
    method: 'get'
}).then(res => res)

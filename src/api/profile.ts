import request from '@/config/axios';

export const profileAdd = (profile: any) => request({
    url: 'api/v3/manager/profile/add',
    method: 'post',
    data: profile
}).then(res => res)

export const profileDelete = (id: string) => request({
    url: 'api/v3/manager/profile/delete/' + id,
    method: 'post'
}).then(res => res)

export const profileUpdate = (profile: any) => request({
    url: 'api/v3/manager/profile/update',
    method: 'post',
    data: profile
}).then(res => res)

export const profileById = (id: string) => request({
    url: 'api/v3/manager/profile/id/' + id,
    method: 'get'
}).then(res => res)

export const profileByDeviceId = (deviceId: string) => request({
    url: 'api/v3/manager/profile/device_id/' + deviceId,
    method: 'get'
}).then(res => res)

export const profileList = (profile: any) => request({
    url: 'api/v3/manager/profile/list',
    method: 'post',
    data: profile
}).then(res => res)

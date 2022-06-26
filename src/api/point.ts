import request from '@/config/axios';

// point
export const pointAdd = (point: any) => request({
    url: 'api/v3/manager/point/add',
    method: 'post',
    data: point
}).then(res => res)

export const pointDelete = (id: string) => request({
    url: 'api/v3/manager/point/delete/' + id,
    method: 'post'
}).then(res => res)

export const pointUpdate = (point: any) => request({
    url: 'api/v3/manager/point/update',
    method: 'post',
    data: point
}).then(res => res)

export const pointById = (id: string) => request({
    url: 'api/v3/manager/point/id/' + id,
    method: 'get'
}).then(res => res)

export const pointList = (point: any) => request({
    url: 'api/v3/manager/point/list',
    method: 'post',
    data: point
}).then(res => res)

export const pointUnit = (pointIds: any) => request({
    url: 'api/v3/manager/point/unit',
    method: 'post',
    data: pointIds
}).then(res => res)

export const pointByProfileId = (profileId: string) => request({
    url: 'api/v3/manager/point/profile_id/' + profileId,
    method: 'get'
}).then(res => res)

export const pointByDeviceId = (deviceId: string) => request({
    url: 'api/v3/manager/point/device_id/' + deviceId,
    method: 'get'
}).then(res => res)

// point value
export const pointValueByDeviceId = (deviceId: string, history: any) => request({
    url: 'api/v3/data/point_value/latest/device_id/' + deviceId,
    method: 'get',
    params: {history}
}).then(res => res)

export const pointValueList = (pointValue: any) => request({
    url: 'api/v3/data/point_value/list',
    method: 'post',
    data: pointValue
}).then(res => res)

import request from '@/config/axios';

export const driverInfoAdd = (driverInfo: any) => request({
    url: 'api/v3/manager/driver_info/add',
    method: 'post',
    data: driverInfo
}).then(res => res)

export const driverInfoUpdate = (driverInfo: any) => request({
    url: 'api/v3/manager/driver_info/update',
    method: 'post',
    data: driverInfo
}).then(res => res)

export const driverInfoByAttributeIdAndDeviceId = (attributeId: string, deviceId: string) => request({
    url: 'api/v3/manager/driver_info/attributeId/' + attributeId + '/device_id/' + deviceId,
    method: 'get'
}).then(res => res)

export const driverInfoByDeviceId = (deviceId: string) => request({
    url: 'api/v3/manager/driver_info/device_id/' + deviceId,
    method: 'get'
}).then(res => res)

export const pointInfoAdd = (pointInfo: any) => request({
    url: 'api/v3/manager/point_info/add',
    method: 'post',
    data: pointInfo
}).then(res => res)

export const pointInfoUpdate = (pointInfo: any) => request({
    url: 'api/v3/manager/point_info/update',
    method: 'post',
    data: pointInfo
}).then(res => res)

export const pointInfoByDeviceIdAndPointId = (deviceId: string, pointId: string) => request({
    url: 'api/v3/manager/point_info/device_id/' + deviceId + '/pointId/' + pointId,
    method: 'get'
}).then(res => res)

export const pointInfoByDeviceId = (deviceId: string) => request({
    url: 'api/v3/manager/point_info/device_id/' + deviceId,
    method: 'get'
}).then(res => res)

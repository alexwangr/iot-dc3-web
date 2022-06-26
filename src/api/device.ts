import request from '@/config/axios';

export const deviceAdd = (device: any) => request({
    url: 'api/v3/manager/device/add',
    method: 'post',
    data: device
}).then(res => res)

export const deviceDelete = (id: string) => request({
    url: 'api/v3/manager/device/delete/' + id,
    method: 'post'
}).then(res => res)

export const deviceUpdate = (device: any) => request({
    url: 'api/v3/manager/device/update',
    method: 'post',
    data: device
}).then(res => res)

export const deviceById = (id: string) => request({
    url: 'api/v3/manager/device/id/' + id,
    method: 'get'
}).then(res => res)

export const deviceByDriverId = (driverId: string) => request({
    url: 'api/v3/manager/device/driver_id/' + driverId,
    method: 'get'
}).then(res => res)

export const deviceByProfileId = (profileId: string) => request({
    url: 'api/v3/manager/device/profile_id/' + profileId,
    method: 'get'
}).then(res => res)

export const deviceList = (device: any) => request({
    url: 'api/v3/manager/device/list',
    method: 'post',
    data: device
}).then(res => res)

// device status
export const deviceStatus = (device) => request({
    url: 'api/v3/manager/status/device',
    method: 'post',
    data: device
}).then(res => res)

export const deviceStatusByDriverId = (driverId: string) => request({
    url: 'api/v3/manager/status/device/driver_id/' + driverId,
    method: 'get'
}).then(res => res)

export const deviceStatusByProfileId = (profileId: string) => request({
    url: 'api/v3/manager/status/device/profile_id/' + profileId,
    method: 'get'
}).then(res => res)

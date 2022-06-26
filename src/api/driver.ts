import request from '@/config/axios';

export const driverById = (id: string) => request({
    url: 'api/v3/manager/driver/id/' + id,
    method: 'get'
}).then(res => res)

export const driverList = (driver: any) => request({
    url: 'api/v3/manager/driver/list',
    method: 'post',
    data: driver
}).then(res => res)

export const driverStatus = (driver: any) => request({
    url: 'api/v3/manager/status/driver',
    method: 'post',
    data: driver
}).then(res => res)

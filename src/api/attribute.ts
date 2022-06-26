import request from '@/config/axios'

export const driverAttributeByDriverId = (id: string) => request({
    url: 'api/v3/manager/driver_attribute/driver_id/' + id,
    method: 'get'
}).then(res => res)

export const pointAttributeByDriverId = (id: string) => request({
    url: 'api/v3/manager/point_attribute/driver_id/' + id,
    method: 'get'
}).then(res => res)

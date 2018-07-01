import request from '../config'
import qs from 'qs'


export const getTemplate = params => request(`/postDemand/getTemplate`, { params })

export const createDemand = (data, param) => request.post(`/postDemand/createNeeds?${qs.stringify(param)}`, data)

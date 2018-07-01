import request from '../config'


export const getNeedOrderDetail = params => request(`/postDemand/getOrderNeedsInfo`, {params})

export const selectPartyB = params => request(`/postDemand/choose`, {params})

export const cancelOrder = params => request(`/postDemand/cancel`, {params})

import request from '../config'


export const getNeedOrderList = params => request(`/postDemand/getOrderNeedsList`, {params})

export const getServiceOrderList = params => request(`/tenderDemand/getQuotes`, {params})

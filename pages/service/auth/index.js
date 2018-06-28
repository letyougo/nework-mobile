import request from '../config'
import qs from 'qs'


export const sendCode = data => request.post(`/login/signUp/sendCode`, qs.stringify(data))

export const register = data => request.post(`/login/signUp`, qs.stringify(data))

export const login = data => request.post(`/login/signIn`, qs.stringify(data))

export const forgetPasswordSendCode = data => request.post(`/login/forgot/sendCode`, qs.stringify(data))

export const changePassword = data => request.post(`/login/forgot`, qs.stringify(data))

export const signOut = () => request(`/login/signOut`)

export const sendEmailCode = data=> request.post('/bind/sendMailCode',qs.stringify(data))

export const sendPhoneCode = data => request.post('/bind/sendPhoneCode',qs.stringify(data))

export const verifyEmailCode = data=> request.post('/bind/verifyEmailCode',qs.stringify(data))

export const verifyPhoneCode = data => request.post('/bind/verifyPhoneCode',qs.stringify(data))

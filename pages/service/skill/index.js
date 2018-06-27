import axios from '../config'
import qs from 'qs'


export const releaseSkill = data => axios.post(`/skill/postSkill`, qs.stringify(data))

export const getServiceList = params => axios(`/service/listServiceByParam`, { params })

export const getSkillList = params => axios(`/skill/getSkillByUserId`, { params })

export const deleteSkillList = params => axios(`/skill/deleteSkill`, { params } )

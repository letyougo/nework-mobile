import request from '../config'


export const getNearbySKill = params => request(`/skill/getSkillByRange`, { params })


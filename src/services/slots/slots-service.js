import axios from 'axios'

const SLOTS_API = "http://localhost:4000/slots/";

export const findSlotsByCoach = async (id) => {
    const api = SLOTS_API + "coach/" + id  
    const response = await axios.get(api)
    return response.data
}

export const findSlotsByDate = async (date) => {
    const api = SLOTS_API + "?date=" + date 
    const response = await axios.get(api)
    return response.data
}

export const createSlot = async (payload) => {
    const response = await axios.post(SLOTS_API, payload)
    return response.data
}
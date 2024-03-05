import axios from 'axios'

const BOOKINGS_API = "http://localhost:4000/bookings/";

export const bookSlot = async (payload) => {
    const response = await axios.post(BOOKINGS_API, payload)
    return response.data
}

export const findUpcomingBookingByUser = async (userId) => {
    const api = BOOKINGS_API + "upcoming/" + userId
    const response = await axios.get(api)
    return response.data
}

export const findPastBookingByUser = async (userId) => {
    const api = BOOKINGS_API + "past/" + userId
    const response = await axios.get(api)
    return response.data
}
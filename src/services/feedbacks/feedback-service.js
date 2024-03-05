import axios from 'axios'

const FEEDBACKS_API = "http://localhost:4000/feedbacks/";

export const postFeedback = async (payload) => {
    const response = await axios.post(FEEDBACKS_API, payload)
    return response.data
}

export const findFeedbacksByUser = async (userId) => {
    const api = FEEDBACKS_API + "coach/" + userId
    const response = await axios.get(api)
    return response.data
}

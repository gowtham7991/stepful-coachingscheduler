import axios from 'axios'

const LOGIN_API = "http://localhost:4000/users/login";

export const login = async (userCredentials) => {
    const response = await axios.post(LOGIN_API, userCredentials)
    return response.data
}
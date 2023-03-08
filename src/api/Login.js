import axios from 'axios';

const server =  process.env.REACT_APP_SERVER;

export const loginRequest = async (userData) => {
    try {

        return await axios.post(`http://${server}/api/v1/auth/login`, userData)

    } catch (err) {

        return err.response
        
    }
}

export const registerRequest = async (userData) => await axios.post(`http://${server}/api/v1/auth/register`, userData)

export const confirmRegisterRequest = async (token) => await axios.post(`http://${server}/api/v1/auth/register/confirmation/${token}`)
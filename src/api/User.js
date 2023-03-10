import axios from 'axios';

const server =  process.env.REACT_APP_SERVER;

export const getUserRequest = async (token) => {
    try {
        return await axios.get(`http://${server}/api/v1/profile/get`, {headers: {'Authorization': `Bearer ${token}`}})
    } catch (err) {
        return err.response
    }
}

export const setUserRequest = async (token, data) => {
    try {
        return await axios.put(`http://${server}/api/v1/profile/edit`, data, {headers: {'Authorization': `Bearer ${token}`}})
    } catch (err) {
        return err
    }
}
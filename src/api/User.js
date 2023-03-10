import axios from 'axios';

const server =  process.env.REACT_APP_SERVER;

export const getUserRequest = async (token) => await axios.get(`http://${server}/api/v1/profile/get`, {headers: {'Authorization': `Bearer ${token}`}})

export const setUserRequest = async (token, data) => {
    console.log("🚀 ~ file: User.js:8 ~ setUserRequest ~ data:", data)
    console.log("🚀 ~ file: User.js:8 ~ setUserRequest ~ token:", token)
    try {
        return await axios.put(`http://${server}/api/v1/profile/edit`, {headers: {'Authorization': `Bearer ${token}`}})
    } catch (err) {
        console.warn(err)
    }
}
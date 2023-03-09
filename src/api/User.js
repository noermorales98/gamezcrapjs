import axios from 'axios';

const server =  process.env.REACT_APP_SERVER;

export const getUserRequest = async () => await axios.get(`http://${server}/api/v1/profile/get`)

export const setUserRequest = async () => await axios.put(`http://${server}/api/v1/profile/edit`)
import axios from 'axios';

const server =  process.env.REACT_APP_SERVER;
const token = process.env.REACT_APP_TOKEN;

export const loginRequest = async (userData) => await axios.post(`http://${server}/api/v1/auth/login`, userData)

export const registerRequest = async (userData) => await axios.post(`http://${server}/api/v1/auth/register`, userData)

export const confirmRegister = async (userData) => await axios.post(`http://${server}/api/v1/auth/register/confirmation/${token}`, userData)
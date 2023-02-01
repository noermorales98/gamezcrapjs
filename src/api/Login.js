import axios from 'axios';

export const loginRequest = async (userData) => await axios.post('http://10.10.49.120:5001/api/v1/auth/login', userData)

export const registerRequest = async (userData) => await axios.post('http://10.10.49.120:5001/api/v1/auth/register', userData)
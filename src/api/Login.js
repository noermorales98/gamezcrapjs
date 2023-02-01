import axios from 'axios';

export const login = async (userData) => await axios.post('', userData)
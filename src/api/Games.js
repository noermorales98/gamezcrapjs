import axios from 'axios';

const server =  process.env.REACT_APP_SERVER;

export const getGamesRequest = async () => await axios.get(`http://${server}/api/v1/home/`)

export const getGameRequest = async () => await axios.get(`http://${server}/api/v1/`)
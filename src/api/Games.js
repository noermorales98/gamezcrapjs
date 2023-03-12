import axios from 'axios';

const server =  process.env.REACT_APP_SERVER;

export const getGamesRequest = async () => await axios.get(`http://${server}/api/v1/home/lista-juegos`)

export const getGameRequest = async (title) => await axios.get(`http://${server}/api/v1/home/termsearcher`, { params: { title: `${title}` } })

export const setGameRequest = async (token, id, title, img) => {
    try {
        return await axios.post(`http://${server}/api/v1/favorites/add`, {headers: {'Authorization': `Bearer ${token}`}, data: {gameID: `${id}`, title: `${title}`, thumb: `${img}`}})
    } catch (err) {
        return err
    }
}
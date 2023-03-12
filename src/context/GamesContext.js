import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getGamesRequest, getGameRequest, setGameRequest } from "../api/Games";

const GamesContext = createContext();

export const useGames = () => {
    const context = useContext(GamesContext);
    return context;
};

export const GamesProvider = ({ children }) => {


    const [games, setGames] = useState([]);
    const [game, setGame] = useState([]);
    const [fav, setFav] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();


    const getGames = async () => {
        const res = await getGamesRequest();
        setGames(res.data.data);
    };


    const getGame = async (title) => {
        setIsLoading(true);

        const res = await getGameRequest(title);
        setGame(res.data.data);

        navigate("/resultado");

        setIsLoading(false);
    };


    const setFavorite = async (id, title, img) => {
        
        const token = JSON.parse(window.localStorage.getItem('tokenKey'))
        const res = await setGameRequest(token, id, title, img);
        console.log("🚀 ~ file: GamesContext.js:42 ~ setFavorite ~ res:", res);

    };


    useEffect(() => {
        getGames();
    }, []);


    return (
        <GamesContext.Provider value={{
            games,
            game,
            isLoading,

            getGames,
            getGame,
            setFavorite,
        }}>
            {children}
        </GamesContext.Provider>
    );
};

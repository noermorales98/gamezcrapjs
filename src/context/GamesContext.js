import { createContext, useContext, useEffect, useState } from "react";

import { getGamesRequest } from "../api/Games";

const GamesContext = createContext()

export const useGames = () => {
    const context = useContext(GamesContext)
    return context
}

export const GamesProvider = ({children}) => {

    const [games, setGames] = useState([])

    const getGames = async () => {
        const res = await getGamesRequest()
        setGames(res.data.data)
    }

    useEffect(() => {
        getGames()
    }, [])

    return <GamesContext.Provider value={{
        games,
        getGames,
    }}>
        { children }
    </GamesContext.Provider>
}
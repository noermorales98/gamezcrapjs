import { createContext, useContext, useState } from "react";

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
        console.log(res)
    }

    return <GamesContext.Provider value={{
        games,
        getGames,
    }}>
        { children }
    </GamesContext.Provider>
}
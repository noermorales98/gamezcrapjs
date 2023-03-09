import { createContext, useContext, useEffect, useState } from "react";

import { getUserRequest, setUserRequest } from "../api/User";

const UserContext = createContext();

export const useUser = () => {
    const context = useContext(UserContext)
    return context
}

export const UserProvider = ({children}) => {


    const getUserData = async (token) => {
        const res = await getUserRequest()
        return res.json()
    }


    const putUserData = async () => {
        const res = await setUserRequest()
        return res.json()
    }


    return <UserContext.Provider value={{
        getUserData,
        putUserData,
    }}>
        { children }
    </UserContext.Provider>
}
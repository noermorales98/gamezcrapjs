import { createContext, useContext, useEffect, useState } from "react";

import { getUserRequest, setUserRequest } from "../api/User";

const UserContext = createContext();

export const useUser = () => {
    const context = useContext(UserContext)
    return context
}

export const UserProvider = ({children}) => {


    const getUserData = async (token) => {
        const res = await getUserRequest(token)
        return res
    }


    const putUserData = async (token, data) => {
        console.log("🚀 ~ file: UserContext.js:22 ~ putUserData ~ data:", data)
        console.log("🚀 ~ file: UserContext.js:22 ~ putUserData ~ token:", token)
        
        const res = await setUserRequest(token, data)
        console.log("🚀 ~ file: UserContext.js:23 ~ putUserData ~ res:", res)
    }


    return <UserContext.Provider value={{
        getUserData,
        putUserData,
    }}>
        { children }
    </UserContext.Provider>
}
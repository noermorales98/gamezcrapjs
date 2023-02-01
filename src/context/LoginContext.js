import { login } from "../api/Login";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginContext = createContext()

export const useLogin = () => {
    const context = useContext(LoginContext);
    return context
}

export const LoginProvider = ({ children }) => {

    const [userData, setUserData] = useState([])
    const navigate = useNavigate()

    const login = async (e) => {
        if( e.email == "a" ){
            navigate("/")
        }
    }

    return<LoginContext.Provider value={{
        login,
    }}>
        { children }
    </LoginContext.Provider>
}
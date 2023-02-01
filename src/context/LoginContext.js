import { loginRequest, registerRequest } from "../api/Login";
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
        const res = await loginRequest(e)

        if( !res.error ){
            navigate("/")
        }else{
            alert(res.message)
        }
    }

    const register = async (e) => {
        const res = await registerRequest(e)
        console.log(res)
    }

    return<LoginContext.Provider value={{
        login,
        register
    }}>
        { children }
    </LoginContext.Provider>
}
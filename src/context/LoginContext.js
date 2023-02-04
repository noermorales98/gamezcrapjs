import { loginRequest, registerRequest, confirmRegisterRequest } from "../api/Login";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginContext = createContext()

export const useLogin = () => {
    const context = useContext(LoginContext);
    return context
}

export const LoginProvider = ({ children }) => {

    const [userData, setUserData] = useState([null])
    const navigate = useNavigate()

    const login = async (e) => {
        const res = await loginRequest(e)

        console.log(res)

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

    const confirm_register = async (e) => {
        const res = await confirmRegisterRequest(e)
        return res.status
    }

    return<LoginContext.Provider value={{
        userData,
        login,
        register,
        confirm_register,
    }}>
        { children }
    </LoginContext.Provider>
}
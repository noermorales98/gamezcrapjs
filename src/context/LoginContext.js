import { loginRequest, registerRequest, confirmRegisterRequest } from "../api/Login";
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginContext = createContext()

export const useLogin = () => {
    const context = useContext(LoginContext);
    return context
}

export const LoginProvider = ({ children }) => {

    const [user, setUser] = useState([])
    const [token, setToken] = useState(null)

    const [isLoading, setIsLoading] = useState(true)

    const navigate = useNavigate()

    const login = async (e) => {
        const res = await loginRequest(e)
        window.localStorage.setItem('user', JSON.stringify(res.data.data))

        if( !res.error ){
            setUser(res.data.data.user)
            setToken(res.data.data.token)
            setIsLoading(false)
            navigate("/")
        }else{
            alert(res.message)
        }
    }


    const logout = () => {
        setUser([])
        window.localStorage.removeItem('user')
    }


    const register = async (e) => {
        const res = await registerRequest(e)
        console.log(res)
    }


    const confirm_register = async (e) => {
        const res = await confirmRegisterRequest(e)
        return res.status
    }


    useEffect(() => {
        if( window.localStorage.getItem('user') ){
            const userData = JSON.parse(window.localStorage.getItem('user'))
            setUser(userData.user)
            setToken(userData.token)
            setIsLoading(false)
        }else{
            setUser([])
            setToken(null)
            setIsLoading(false)
        }
    }, [])


    return<LoginContext.Provider value={{
        isLoading,
        user,
        token,
        login,
        logout,
        register,
        confirm_register,
    }}>
        { children }
    </LoginContext.Provider>
}
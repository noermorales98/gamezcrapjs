import { loginRequest, registerRequest, confirmRegisterRequest } from "../api/Login";
import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginContext = createContext()

export const useLogin = () => {
    const context = useContext(LoginContext);
    return context
}

export const LoginProvider = ({ children }) => {

    const navigate = useNavigate()

    const [user, setUser] = useState([])
    const [token, setToken] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    
    const login = async (e) => {
        const res = await loginRequest(e)
        const { data } = res

        if( !data.error ){

            window.localStorage.setItem('user', JSON.stringify(data.data))

            setUser([data.data.user])
            setToken(data.data.token)

            setIsLoading(false)

            navigate('/')

        }else{

            alert('Realizar un card - ' + data.message)

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


    const logout = () => {
        setUser([])
        window.localStorage.removeItem('user')
    }


    useEffect(() => {
        const data = window.localStorage.getItem('user')
        const user = JSON.parse(data)

        if( data ){

            setUser([user.user])
            setToken(user.token)
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
        register,
        confirm_register,
        logout,
    }}>
        { children }
    </LoginContext.Provider>
}
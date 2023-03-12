import { loginRequest, registerRequest, confirmRegisterRequest } from "../api/Login";
import { getUserRequest, setUserRequest } from "../api/User";

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

            window.localStorage.setItem('tokenKey', JSON.stringify(data.data.token))

            setUser(data.data.user)
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
        window.localStorage.removeItem('tokenKey')
        setUser([])
        setToken(null)
    }


    const getUserData = async (token) => {
        const res = await getUserRequest(token)

        if( res.status === 401){
            window.localStorage.removeItem('tokenKey')

            alert('Realizar un card - Su sesion a expirado, debe iniciar sesion de nuevo')

            navigate('/login')
        }

        return res.data
    }


    const putUserData = async (token, data) => {
        const res = await setUserRequest(token, data)
        console.log("🚀 ~ file: LoginContext.js:82 ~ putUserData ~ res:", res)

        if( res.status === 500 ){
            alert('Realizar un card - Oops, hubo un error al intentar actualizar su informacion')
        }

        if( res.status === 401){
            window.localStorage.removeItem('tokenKey')

            alert('Realizar un card - Su sesion a expirado, debe iniciar sesion de nuevo')

            navigate('/login')
        }

        setUser(data)

        alert('Realizar un card - Todo correcto')
    }


    useEffect(() => {

        (async () => {
            const token = JSON.parse(window.localStorage.getItem('tokenKey'))
            
            if( token ){
                const res = await getUserData(token)
            
                setUser(res.data)
                setToken(token)
            }

            setIsLoading(false)
        })();
        
    }, [])


    return<LoginContext.Provider value={{
        isLoading,
        user,
        token,

        login,
        register,
        confirm_register,
        logout,

        putUserData,
    }}>
        { children }
    </LoginContext.Provider>
}
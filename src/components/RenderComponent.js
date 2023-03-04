import { useLogin } from '../context/LoginContext'
import { RenderLoginButton } from './login_button/LoginButtonComponent'
import { RenderUserData } from './user_data/UserDataComponent'

export function RenderComponent(){

    const { user } = useLogin()

    
    if( user.length === 0 ) return(
        RenderLoginButton()
    )

    return(
        RenderUserData()
    )
}
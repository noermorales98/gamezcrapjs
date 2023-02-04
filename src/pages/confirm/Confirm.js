import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './Confirm.css'
import { useLogin } from '../../context/LoginContext';

function Confirm(){

    const params = useParams()
    const navigate = useNavigate()
    const { confirm_register } = useLogin()

    useEffect(() => {
        if( params.token ){
            const res = confirm_register( params.token );
            if( res.status === 200){
                navigate("/")
            }else{
                //mostrar mensaje de error NO DEBERIA DE PASAR
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.token])

    return(
        <div className='container'>
            <h1 className='text-white'>Confirmado</h1>
        </div>
    )
}

export default Confirm;
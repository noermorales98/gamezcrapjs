import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './Confirm.css'
import { confirmRegister } from '../../api/Login';

function Confirm(){

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if( params.token ){
            const res = confirmRegister( params.token );
            if( res.status === 200){
                navigate("/")
            }else{
                //mostrar mensaje de error NO DEBERIA DE PASAR
            }
        }
    }, [params.token])

    return(
        <div className='container'>
            <h1 className='text-white'>Confirmado</h1>
        </div>
    )
}

export default Confirm;
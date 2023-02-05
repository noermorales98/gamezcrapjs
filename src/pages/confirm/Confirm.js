import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import './Confirm.css'
import { useLogin } from '../../context/LoginContext';
import eparty from '../../sources/img/eparty.png'

function Confirm() {

    const params = useParams()
    const navigate = useNavigate()
    const { confirm_register } = useLogin()

    useEffect(() => {
        if (params.token) {
            const res = confirm_register(params.token);
            if (res.status === 200) {
                navigate("/")
            } else {
                //mostrar mensaje de error NO DEBERIA DE PASAR
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.token])

    return (
        <div className='container confirm__check'>
            <div className="confirm__check-icon">
                <span className='confirm-icon'>
                    <img src={eparty}/>
                </span>
            </div>
            <p className='text-white text-center'>¡Tu correo ha sido confirmado! <br />Ya puedes empezar a guardar tus favoritos.</p>
            <Link to={"/"} className="confirm__link">
                Inicia aquí
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "#ff5669"}}><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
                </Link>
        </div>
    )
}

export default Confirm;
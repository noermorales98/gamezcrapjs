import './Ajustes.css'
// import imagen from '../../sources/img/avatar.webp'
import { useLogin } from '../../context/LoginContext';

import { Formik, Form, Field } from 'formik'
// ErrorMessage
// import { useEffect, useState } from 'react';


function Ajustes() {

    const { user } = useLogin()
    // const [userData, setUserData] = useState()

    // useEffect(() => {

    // })
    console.log('Ajustes page: ',user)

    return (
        <div className='main__container'>
            <div className="ajustes__container">
                <div className="ajustes__container-flex">
                    <div className="d-flex">
                        <div className="login__col">
                            <div className="ajustes__form">
                                <h1>Edita tu perfil</h1>
                                <p>Información personal</p>
                                <Formik
                                    initialValues={userData}
                                    enableReinitialize
                                >
                                    <Form>
                                        <div className="name">
                                            <label htmlFor="name">Nombre</label>
                                            <Field type="text" name="nombres" />
                                        </div>

                                        <div className="apellido">
                                            <label htmlFor="lastname">Apellido</label>
                                            <Field type="text" name="apellidos" />
                                        </div>

                                        <div className="password">
                                            <p>Cambia tu contraseña</p>

                                            <div className="oldpassword">
                                                <label htmlFor="password">Contraseña anterior</label>
                                                <Field type="password" name="password" />
                                            </div>

                                            <div className="login__newpassword">
                                                <div className="newpassword">
                                                    <label htmlFor="newpassword">Nueva contraseña</label>
                                                    <Field type="password" name="newpassword" />
                                                </div>

                                                <div className="confirmpassword">
                                                    <label htmlFor="confirmpassword">Confirmar contraseña</label>
                                                    <Field type="password" name="confirmpassword" />
                                                </div>
                                            </div>

                                            <button type="submit">Guardar</button>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ajustes;
import './Ajustes.css'
import { useLogin } from '../../context/LoginContext';

import { Formik, Form, Field } from 'formik' // ErrorMessage
import * as Yup from 'yup'
import { useEffect, useState } from 'react';


function Ajustes() {

    const { user, putUserData } = useLogin()

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
                                    initialValues={user}
                                    validationSchema={Yup.object({
                                        userNombres: Yup.string().required('Es necesario colocar un email'),
                                        userApellidos: Yup.string().required('Es necesario colocar la contraseña'),
                                    })}
                                    onSubmit={async (values, actions) => {
                                        const token = await JSON.parse(window.localStorage.getItem('tokenKey'))

                                        await putUserData(token, values)
                      
                                        actions.setSubmitting(false)
                                    }}
                                    enableReinitialize
                                >
                                    {({ handleSubmit }) => (
                                        <Form>
                                            <div className="name">
                                                <label htmlFor="name">Nombre</label>
                                                <Field type="text" name="userNombres" />
                                            </div>

                                            <div className="apellido">
                                                <label htmlFor="lastname">Apellido</label>
                                                <Field type="text" name="userApellidos" />
                                            </div>

                                            <hr />

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
                                    )}
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
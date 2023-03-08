import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import React from 'react'

import { useLogin } from '../../context/LoginContext'
import './Register.css'

export function Register() {

  const { register } = useLogin()
  const [VentanaState, setVentanaState] = React.useState(0)
  const ventana = e => {
    setVentanaState(e)
  }

  return (
    <div className='d-flex register__container'>
        <div className="col">
            <div className="register__form">
                <div className="d-flex flex-column rounded-5 w-50 p-3 register__form-data">
                    <div className='justify-content-center align-items-center'>
                        <h1>Comienza aquí 👇</h1>
                        <span>Ingresa tu información para registrar</span>
                    </div>

                    <div className=''>
                        <Formik
                            initialValues={{ userNombres: '', userApellidos: '', userEmail: '', userPassword: '' }}
                            validationSchema={Yup.object({
                                userNombres: Yup.string().required('Es necesario colocar tu información'),
                                userApellidos: Yup.string().required('Es necesario colocar tu información'),
                                userEmail: Yup.string().required('Es necesario colocar un email'),
                                userPassword: Yup.string().required('Es necesario colocar la contraseña'),
                            })}
                            onSubmit={async (values, actions) => {
                                await register(values)
                                actions.resetForm(true)
                                actions.setSubmitting(false)
                                ventana(1)
                            }}
                            enableReinitialize
                        >
                            {({ handleSubmit }) => (
                                <Form className='d-flex flex-column' onSubmit={handleSubmit}>
                                    <label htmlFor="userNombres" className='font-monospace'>Nombres</label>
                                    <Field name="userNombres" placeholder="Ingresa tus nombres" />
                                    <ErrorMessage component="p" name="userNombres" className='text-danger' />

                                    <label htmlFor="userApellidos" className='font-monospace m-1 mt-2'>Apellidos</label>
                                    <Field name="userApellidos" placeholder="Ingresa tus apellidos" />
                                    <ErrorMessage component="p" name="userApellidos" className='text-danger' />

                                    <label htmlFor="userEmail" className='font-monospace m-1 mt-2'>Correo</label>
                                    <Field type="email" name="userEmail" placeholder="ejemplo@ejemplo.com" />
                                    <ErrorMessage component="p" name="userEmail" className='text-danger' />

                                    <label htmlFor="userPassword" className='font-monospace m-1 mt-2'>Contraseña</label>
                                    <Field type="password" name="userPassword" placeholder="contraseña" />
                                    <ErrorMessage component="p" name="userPassword" className='text-danger' />

                                    <button type='submit' className='btn mt-4'>Registrar</button>
                                </Form>
                            )}
                        </Formik>
                    </div>

                    <div className='d-flex gap-2 justify-content-center'>
                        <hr />
                        <p>¿Ya tienes cuenta? </p><Link to={"/login"} className="text-decoration-none">Iniciar sesion</Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="col register__hidden">
            <div className=" position-fixed top-0 end-0 mt-4 me-4">
                <Link to={"/"} className="text-decoration-none return">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(255, 255, 255, 1)" }}><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg>
                </Link>
            </div>
        <div className="login__bg">
          <div className="login__bg-text text-white">
            <div className="login__card">
              <h1 className="login__bg-title">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" style={{ fill: "rgba(255, 255, 255, 1)" }}><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"></path></svg>
                Registrate para guardar tus <br />
                <span>juegos favoritos.</span>
              </h1>
            </div>
          </div>
        </div>
        </div>
        <div className={VentanaState === 1 ? "popup" : "d-none"}>
                <div className="popup__container blanco">
                    <div className="popup__content">
                        <i onClick={()=>{ventana(0)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "#000"}}><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
                        </i>
                        <h3>¡Gracias por registrarte!</h3>
                        <p>Por favor, revisa tu correo electrónico para finalizar el proceso. Haz clic en el enlace que te hemos enviado.</p>
                    </div>
                </div>
            </div>
    </div>
  )
}
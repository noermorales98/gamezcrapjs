import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'

import { useLogin } from '../../context/LoginContext'
import './Login.css'

export function Login() {

  const { login } = useLogin()

  return (
    <div className='d-flex row login__container'>
      <div className="col">
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
      <div className="col">
        <div className="login__form">
          <div className="login__icon">
            <Link to={"/"} className="text-decoration-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgba(255, 255, 255, 1)" }}><path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path></svg>
            </Link>
          </div>
          <div className="d-flex flex-column rounded-5 w-50 p-3 login__form-data">
            <div className='justify-content-center align-items-center'>
              <h1>Hey, Hola 👋</h1>
              <span>Ingresa tu información para continuar</span>
            </div>

            <div className=''>
              <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={Yup.object({
                  email: Yup.string().required('Es necesario colocar un email'),
                  password: Yup.string().required('Es necesario colocar la contraseña'),
                })}
                onSubmit={async (values, actions) => {
                  await login(values)

                  actions.setSubmitting(false)
                }}
                enableReinitialize
              >
                {({ handleSubmit }) => (
                  <Form className='d-flex flex-column' onSubmit={handleSubmit}>
                    <label htmlFor="email" className='font-monospace'>Correo</label>
                    <Field type="email" name="email"/>
                    <ErrorMessage component="p" name="email" className='text-danger' />

                    <label htmlFor="password" className='font-monospace'>Contraseña</label>
                    <Field type="password" name="password" />
                    <ErrorMessage component="p" name="password" className='text-danger' />

                    <button type='submit' className='btn mt-4'>Login</button>
                  </Form>
                )}
              </Formik>
            </div>


            <div className='login__registro'>
              <hr />
              <Link to={"/registro"} className="btn mt-4 text-decoration-none" >Crear una cuenta</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
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
          <div className="login__bg__text text-white">
            <div className="login__card">
              <h1 className="login__bg__text__title">Registrate para guardar tus juegos favoritos</h1>

              <Link className='btn w-100 mt-4 bg-danger text-white' to={"/"}>Go home</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="login__form">
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
                  <Field name="email" placeholder="ejemplo@ejemplo.com" />
                  <ErrorMessage component="p" name="email" className='text-danger' />

                  <label htmlFor="password" className='font-monospace'>Contraseña</label>
                  <Field name="password" placeholder="contraseña" />
                  <ErrorMessage component="p" name="password" className='text-danger' />

                  <button type='submit' className='btn mt-4'>Login</button>
                </Form>
              )}
            </Formik>
          </div>


          <div>
            <hr />
            <Link to={"/registro"} className="btn mt-4 text-decoration-none" >Crear una cuenta</Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'

import { useLogin } from '../../context/LoginContext'

export function Login() {

  const { login } = useLogin()

  return (
    <div className="container position-absolute top-50 start-50 p-3 d-flex flex-column bg-dark rounded-5 text-white" style={{transform:"translate(-50%, -50%)", width: "45vh", height: "60vh"}}>
      <div className='h-25 d-flex justify-content-center align-items-center'>
        <span>Login</span>
      </div>

      <div className=''>
        <Formik
          initialValues={{ email: '', contraseña: '' }}
          validationSchema={Yup.object({
            email: Yup.string().required('Es necesario colocar un email'),
            contraseña: Yup.string().required('Es necesario colocar la contraseña'),
          })}
          onSubmit={ async (values, actions) => {
            await login(values)

            actions.setSubmitting(false)
          }}
          enableReinitialize
        >
          {({ handleSubmit }) => (
            <Form className='d-flex flex-column' onSubmit={handleSubmit}>
              <label htmlFor="email" className='text-white font-monospace'>Correo</label>
              <Field name="email" placeholder="ejemplo@ejemplo.com" />
              <ErrorMessage component="p" name="email" className='text-danger' />

              <label htmlFor="contraseña" className='text-white font-monospace'>Contraseña</label>
              <Field name="contraseña" placeholder="Contraseña" />
              <ErrorMessage component="p" name="contraseña" className='text-danger' />

              <button type='submit' className='btn bg-info text-dark mt-4'>Login</button>
            </Form>
          )}
        </Formik>
      </div>


      <div className='fixed-bottom m-3'>
        <hr />
        <Link to={"/registro"} className="text-decoration-none btn bg-info w-100" >Crear una cuenta</Link>
      </div>
    </div>
  )
}
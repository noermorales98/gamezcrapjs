import './Contacto.css';
import { Formik } from 'formik';

export function Contacto() {
    return (
        <div className='container'>
            <div className="contact__container">
                <div className="contact__form">
                    <Formik initialValues={{ nomnbre: '', correo: '', mensaje: '' }}
                        validate={values => {
                            const errors = {};
                            if (!values.nombre) {
                                errors.nombre = 'Requerido';
                            }
                            if (!values.mensaje) {
                                errors.mensaje = 'Requerido';
                            }
                            else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                            }
                            return errors;

                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >

                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="name">Nombre</label>
                                <input
                                    type="name"
                                    name="name"
                                    id='name'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                                {errors.name && touched.name && errors.name}
                                <label htmlFor="email">Correo</label>
                                <input
                                    type="email"
                                    name="email"
                                    id='email'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {errors.email && touched.email && errors.email}
                                {/* // */}
                                <label htmlFor="mensaje">Mensaje</label>
                                <textarea name="mensaje" id="mensaje" cols="30" rows="10" onChange={handleChange} onBlur={handleBlur} value={values.mensaje}></textarea>
                                <button type="submit" disabled={isSubmitting}>
                                    Enviar
                                </button>
                            </form>)}

                    </Formik>
                </div>
            </div>
        </div>
    )
}
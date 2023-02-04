import './Ajustes.css'
import imagen from '../../sources/img/avatar.webp'
function Ajustes() {
    return (
        <div className='main__container'>
            <div className="ajustes__container">
                <div className="ajustes__container-flex">
                    <div className="d-flex">
                        <div className="login__col">
                            <div className="ajustes__form">
                                <h1>Edita tu perfil</h1>
                                <p>Información personal</p>
                                <form action="">
                                    <div className="name">
                                        <label htmlFor="name">Nombre</label>
                                        <input type="text" name="name" id="name" placeholder="Noelí" />
                                    </div>
                                    <div className="apellido">
                                        <label htmlFor="lastname">Apellido</label>
                                        <input type="text" name="lastname" id="lastname" placeholder="Rodríguez Morales" />
                                    </div>
                                    <div className="correo">
                                        <label htmlFor="email">Correo</label>
                                        <input type="email" name="email" id="email" placeholder="noe.rmorales98@gmail.com" />
                                    </div>
                                    <div className="usuario">
                                        <label htmlFor="user">Usuario</label>
                                        <input type="text" name="user" id="user" placeholder="noermorales" />
                                    </div>
                                    <div className="password">
                                        <p>Cambia tu contraseña</p>
                                        <div className="oldpassword">
                                            <label htmlFor="password">Contraseña anterior</label>
                                            <input type="password" name="password" id="password"/>
                                        </div>
                                        <div className="login__newpassword">
                                            <div className="newpassword">
                                                <label htmlFor="newpassword">Nueva contraseña</label>
                                                <input type="password" name="newpassword" id="newpassword" />
                                            </div>
                                            <div className="confirmpassword">
                                                <label htmlFor="confirmpassword">Confirmar contraseña</label>
                                                <input type="password" name="confirmpassword" id="confirmpassword" />
                                            </div>
                                        </div>
                                        <button type="submit">Guardar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ajustes;
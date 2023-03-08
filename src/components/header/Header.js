import { NavLink, Link, Outlet } from 'react-router-dom'

import './Header.css'
import { RenderUserData } from '../user_data/UserDataComponent'
import { RenderLoginButton } from '../login_button/LoginButtonComponent'
import { useLogin } from '../../context/LoginContext'
// import { RenderComponent } from '../RenderComponent'

function Header() {

    const { user } = useLogin()
    // isLoading

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm navbar-toggleable-sm text-white py-4">
                    <div className="container">
                        <div className="row  d-flex justify-content-center align-items-center w-100">
                            <div className="col">
                                <NavLink className={({isActive}) => (isActive ? 'navbar-brand logo_active' : 'navbar-brand text-white')} to={"/"}>GameZcrap</NavLink>
                            </div>

                            <div className="col-5">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">

                                    <ul className="navbar-nav flex-grow-1 justify-content-between">
                                        <li className="nav-item">
                                            <NavLink className={({isActive}) => (isActive ? 'nav-link active' : 'nav-link text-white')} to={"/acerca"}>Acerca de</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className='nav-link text-white' to={"/funciona"}>¿Cómo funciona?</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className='nav-link text-white' to={"/contacto"}>Contáctanos</NavLink>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                            <div className="col text-center">

                                {
                                    user.length === 0
                                        ? RenderLoginButton()
                                        : RenderUserData()
                                }

                                {/* {
                                    isLoading
                                        ? <div>Cargando... </div>
                                        : RenderComponent()
                                } */}

                                {/* {
                                    isLoading
                                        ? <div className="">Cargando...</div>
                                        : Array.isArray(user)
                                            ? RenderLoginButton()
                                            : RenderUserData()
                                } */}
                            </div>
                        </div>

                    </div>
                </nav>
            </header>

            <Outlet />
        </>
    );
}

export default Header;
import './Header.css'

import { NavLink, Link, Outlet } from 'react-router-dom'

function Header() {
  return (
    <>
        <header>
            <nav className="navbar navbar-expand-sm navbar-toggleable-sm text-white py-4">
                <div className="container">
                    <div className="row  d-flex justify-content-center align-items-center w-100">
                        <div className="col">
                            <Link className="navbar-brand text-white" to={"/"}>GameZcrap</Link>
                        </div>

                        <div className="col-5">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">

                                    <ul className="navbar-nav flex-grow-1 justify-content-between">
                                        <li className="nav-item">
                                            <NavLink className='nav-link text-white' to={"/acerca"}>Acerca de</NavLink>
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
                            {/* <button className="btn btn-outline-light rounded-pill w-50 p-3">Iniciar Sesion</button> */}
                            <Link  className="btn btn-outline-light rounded-pill w-50 p-3" to={"/login"}>Iniciar sesión</Link>
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
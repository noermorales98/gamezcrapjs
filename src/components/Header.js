import './Header.css'

function Header() {
  return (
    <header>
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm text-white py-4">
            <div className="container">
                <div className="row  d-flex justify-content-center align-items-center w-100">
                    <div className="col">
                        <a className="navbar-brand text-white" href="#">GameZcrapFront</a>
                    </div>

                    <div className="col-5">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                            <ul className="navbar-nav flex-grow-1 justify-content-between">
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Acerca de</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">¿Cómo funciona?</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="#">Contáctanos</a>
                                </li>
                            </ul>

                        </div>
                    </div>

                    <div className="col text-center">
                        <button className="btn btn-outline-light rounded-pill w-50 p-3">Iniciar Sesion</button>
                    </div>
                </div>

            </div>
        </nav>
    </header>
  );
}

export default Header;
import './Home.css'
import imagen from "../sources/img/GameZcrap.png";
function Home() {
    return (
        <div className="container">
            <main role="main" className="pb-3">

                <div className="container d-flex justify-content-center text-white">
                    <div className="row d-flex align-self-center w-100">
                        <div id="titulo" className="col d-flex flex-column justify-content-center align-items-center gap-2">
                            <h1 className="poppins">Encuentra los mejores ofertas de tus juegos favoritos</h1>
                            <div className="container d-flex align-items-center m-0 p-0">
                                <br />
                                    <div className="row  justify-content-between m-0 p-0 w-100">
                                        <div className="col-12 w-100 m-0 p-0">
                                            <form className="card-sm border-search">
                                                <div className="card-body row no-gutters align-items-center">
                                                    <div className="col-auto">
                                                        <i className="fas fa-search h4 text-body"></i>
                                                    </div>
                                                    
                                                    <div className="col">
                                                        <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Busca aquí"/>
                                                    </div>
                                                    
                                                    <div className="col-auto">
                                                        <button id="button" className="btn btn-lg btn-search" type="submit">Search</button>
                                                    </div>
                                                    
                                                </div>
                                            </form>
                                        </div>
                                        
                                    </div>
                            </div>
                        </div>

                        <div className="col">
                            <img className="w-100" src={imagen} alt="logo"/>
                        </div>
                    </div>

                </div>

            </main>
        </div>
    );
}

export default Home;
import Card from '../../components/games-cards/Card';
import { useGames } from '../../context/GamesContext';
import './Home.css'
function Home() {

    const { games } = useGames();
    console.log('Juegos Home: ', games)

    return (
        <>
            <div className="home__container">
                <main role="main" className="pb-3">

                    <div className="container d-flex justify-content-center text-white">
                        <div className="row d-flex align-self-center w-100">
                            <div id="titulo" className="col d-flex flex-column justify-content-center align-items-left gap-2">
                                <h1 className='poppins'>Juegos al <br /> <span>mejor precio</span></h1>
                                <p className="home__subtitle">Encuentra las mejores ofertas de tus juegos favoritos</p>
                                <div className="container d-flex align-items-center m-0 p-0">
                                    <br />
                                    <div className="row  justify-content-between m-0 p-0 w-100">
                                        <div className="col-12 w-100 m-0 p-0">
                                            <form className="card-sm border-search">
                                                <div className="boton card-body row no-gutters align-items-center">
                                                    <div className="col-auto">
                                                        <i className="fas fa-search h4 text-body"></i>
                                                    </div>

                                                    <div className="col">
                                                        <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Busca aquí" />
                                                    </div>

                                                    <div className="col-auto">
                                                        <button id="button" className="boton-search btn btn-lg btn-search" type="button">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path><path d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z"></path></svg>
                                                        </button>
                                                    </div>

                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="col">

                            </div>
                        </div>

                    </div>
                </main>
            </div>
            <div className="games__container">
                <div className="games__content">
                    <h1 className='poppins text-white games__title text-center'>Descubre estos <br /> <span>Juegos</span></h1>
                    <div className="games__cards">

                        {games.map(game => (
                            <Card games={game} key={game.dealID} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
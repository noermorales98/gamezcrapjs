import { useGames } from "../../context/GamesContext";
import Card from "../../components/games-cards/Card";
import './Buscar.css'

export function Buscar() {

    const { game, isLoading, getGame } = useGames()
    console.log("🚀 ~ file: Buscar.js:6 ~ Buscar ~ game:", game)

    return (
        <div className="container">
            <h1 className="text-center text-white m-4 p-3">Buscador de Juegos</h1>
            <div className="col-12 w-50 m-auto p-0">
                <form className="card-sm border-search">
                    <div className="boton card-body row no-gutters align-items-center">
                        <div className="col-auto">
                            <i className="fas fa-search h4 text-body"></i>
                        </div>

                        <div className="col">
                            <input className="form-control form-control-lg form-control-borderless" type="search" placeholder="Busca aquí" id='title-search' />
                        </div>

                        <div className="col-auto">
                            <button id="button" className="boton-search btn btn-lg btn-search" type="button" onClick={() => {
                                let title = document.getElementById('title-search');

                                getGame(title.value)
                            }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path><path d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z"></path></svg>
                            </button>
                        </div>

                    </div>
                </form>
            </div>
            <div className="games_resultados">
                {game.map(game => (
                    <Card games={game} key={game.dealID} />
                ))}
            </div>
        </div>
    )
}
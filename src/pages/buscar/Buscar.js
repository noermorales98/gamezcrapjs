import { useGames } from "../../context/GamesContext"

export function Buscar(){

    const { game, isLoading } = useGames()
    console.log("🚀 ~ file: Buscar.js:6 ~ Buscar ~ game:", game)

    return(
        <h1>Buscar</h1>
    )
}
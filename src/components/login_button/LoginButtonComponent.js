import { Link } from "react-router-dom";

export function renderLoginButton(){
    return(
        <Link className="btn btn-outline-light rounded-pill w-50 p-3" to={"/login"}>Iniciar sesión</Link>
    )
}
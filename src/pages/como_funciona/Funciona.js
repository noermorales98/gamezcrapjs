import './Funciona.css'
export function Funciona() {
    return (
        <div className="text-white container funciona__container">
            <div className="funciona__icon">
                <i className="funciona__icon-svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-question" viewBox="0 0 16 16">
                        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                    </svg>
                </i>
            </div>
            <h1 className="text-center">Como <br /><span>Funciona</span></h1>
            <p className='funciona__p'>Escribe en la barra de busqueda tu juego favorito, encontrarás una lista de muchos juegos.
                En la esquina inferior derecha encontrarás un tag que dice el precio, al darle click te aparece más información
                sobre el juego, como el precio, la plataforma, el género, la fecha de lanzamiento, la descripción, etc.
            </p>
        </div>
    )
}

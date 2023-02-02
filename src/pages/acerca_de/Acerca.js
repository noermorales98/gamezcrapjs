import './Acerca.css'
import { Link } from 'react-router-dom'
export function Acerca() {
    return (
        <div>
            <div className="text-white container about__container">
                {/* <div className="about__icon">
                <i className="about__icon-svg">
                    <img src={imagen} alt="" srcset="" />
                </i>
            </div> */}
                <h1 className='about__h1'>Acerca de GameZcrap</h1>
                <p className='about__p'>
                    GameZcrap es una plataforma en línea que se dedica a encontrar y ofrecer a nuestros clientes las mejores ofertas y
                    descuentos en videojuegos.
                </p>
                <Link to={"/login"}>Accede a GameZcrap</Link>
            </div>
        </div>
    )
}

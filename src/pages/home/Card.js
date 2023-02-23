import './Card.css';
import ejemplo from '../../sources/img/example.jpeg'
function Card(props) {
  return (
    <div className='card__container'>
      <div className='card__img'>
        <img src={props.imagen} alt='Imagen' />
      </div>
      <div className='card__info'>
        <p>{props.nombre}</p>
        <button className='card__info-button'>$500</button>
      </div>
    </div>
  );
}
export default Card;
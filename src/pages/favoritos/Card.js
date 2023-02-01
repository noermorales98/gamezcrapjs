import './Card.css';
import ejemplo from '../../sources/img/example.jpeg'
function Card() {
  return (
    <div className='card__container'>
      <div className='card__img'>
        <img src={ejemplo} alt='Imagen' />
      </div>
      <div className='card__info'>
        <p>Nombre</p>
        <button className='card__info-button'>$500</button>
      </div>
    </div>
  );
}
export default Card;
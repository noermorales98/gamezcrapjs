import './Card.css';
import ejemplo from '../../sources/img/example.jpeg'
function Card({games}) {
  return (
    <div className='card__container'>
      <div className='card__img'>
        <img src={games.thumb} alt='Imagen' />
      </div>
      <div className='card__info'>
        <p>{games.title}</p>
        <button className='card__info-button'>$500</button>
      </div>
    </div>
  );
}
export default Card;
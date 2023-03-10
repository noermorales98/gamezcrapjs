import './Card.css';
function Card({games}) {
  return (
    <div className='card__container' style={{background: `url(${games.thumb})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat'}}>
      <div className='card__info'>
        <p className='game-title'>{games.title}</p>
        <div className='d-flex gap-1'>
        <p className="game-sale-price">${games.salePrice}</p>
        <p className='game-normal-price'>${games.normalPrice}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
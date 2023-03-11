import Card from '../../components/games-cards/Card';
import './Favoritos.css'

function Favoritos() {
  return (
    <div className="container">
      <div className='favoritos__container'>
        <h1 className='text-white text-center p-4'>Mis favoritos</h1>
        <div className='favoritos__cards'>
          <Card games={{ "title": "Carim Pro", "normalPrice": 12, "salePrice": 21, "thumb": "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/12/halo-infinite-scaled.jpg?fit=2560%2C1637&quality=60&strip=all&ssl=1" }} />
          <Card games={{ "title": "Carim Pro", "normalPrice": 12, "salePrice": 21, "thumb": "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2021/12/halo-infinite-scaled.jpg?fit=2560%2C1637&quality=60&strip=all&ssl=1" }} />
        </div>
      </div>
    </div>
  )
}

export default Favoritos;
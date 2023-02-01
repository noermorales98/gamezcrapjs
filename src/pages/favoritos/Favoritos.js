import Card from './Card';
import './Favoritos.css'

function Favoritos() {
  return (
    <div className="container">
      <div className='favoritos__container'>
        <h1 className='text-white'>Mis favoritos</h1>
        <div className='favoritos__cards'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
      </div>
    </div>
  )
}

export default Favoritos;
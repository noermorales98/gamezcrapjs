// import logo from './logo.svg';
import Header from './components/header/Header';

import Home from './pages/home/Home';
import { Acerca } from './pages/acerca_de/Acerca'
import { Funciona } from './pages/como_funciona/Funciona'
import { Contacto } from './pages/contacto/Contacto'

import './App.css';

import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/login/Login';
import Ajustes from './pages/ajustes/Ajustes';
import Favoritos from './pages/favoritos/Favoritos';


const Layout = (tag) => {
  return (
    <div className='home-page'>
      {tag}
    </div>
  )
};

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={Layout(<Header />)} >
          <Route path='' element={<Home />} />
          <Route path='acerca' element={<Acerca />} />
          <Route path='funciona' element={<Funciona />} />
          <Route path='contacto' element={<Contacto />} />
        </Route>
        <Route exact path='/login' element={<Login />} />
        <Route path='/ajustes' element={<Ajustes />} />
        <Route path='/favoritos' element={<Favoritos />} />
        
        <Route path='*' element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
}

export default App;

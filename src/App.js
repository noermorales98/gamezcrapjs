// import logo from './logo.svg';
import Header from './components/header/Header';

import Home from './pages/home/Home';
import { Acerca } from './pages/acerca_de/Acerca'
import { Funciona } from './pages/como_funciona/Funciona'
import { Contacto } from './pages/contacto/Contacto'

import './App.css';

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='home-page'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/acerca' element={<Acerca />} />
        <Route path='/funciona' element={<Funciona />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
    </div>
  );
}

export default App;

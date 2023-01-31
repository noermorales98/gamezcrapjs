// import logo from './logo.svg';
import Header from './components/header/Header';

import Home from './pages/home/Home';
import { Acerca } from './pages/acerca_de/Acerca'
import { Funciona } from './pages/como_funciona/Funciona'
import { Contacto } from './pages/contacto/Contacto'

import './App.css';

import { Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login';

function App() {
  return (
    <div className='home-page'>
      <Routes>
        <Route path='/' element={<Header />} >
          <Route path='' element={<Home />} />
          <Route path='acerca' element={<Acerca />} />
          <Route path='funciona' element={<Funciona />} />
          <Route path='contacto' element={<Contacto />} />
        </Route>

        <Route exact path='/login' element={<Login />} />
        
        <Route path='*' element={<div className='container text-white'><h1>404: Not Found</h1></div>} />
      </Routes>
    </div>
  );
}

export default App;

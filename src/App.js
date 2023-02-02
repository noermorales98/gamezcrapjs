// import logo from './logo.svg';
import Header from './components/header/Header';

import Home from './pages/home/Home';
import { Acerca } from './pages/acerca_de/Acerca'
import { Funciona } from './pages/como_funciona/Funciona'
import { Contacto } from './pages/contacto/Contacto'
import { Login } from './pages/login/Login';
import { Register } from './pages/registro/Register';

import './App.css';
import { LoginProvider } from './context/LoginContext';
import { confirmRegister } from './api/Login';

import { Routes, Route, Navigate } from 'react-router-dom'
import Ajustes from './pages/ajustes/Ajustes';
import Favoritos from './pages/favoritos/Favoritos';
import Confirm from './pages/confirm/Confirm';
import axios from 'axios';


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
      <LoginProvider>
        <Routes>
          <Route path='/' element={Layout(<Header />)} >
            <Route path='' element={<Home />} />
            <Route path='acerca' element={<Acerca />} />
            <Route path='funciona' element={<Funciona />} />
            <Route path='contacto' element={<Contacto />} />
            <Route exact path='ajustes' element={<Ajustes />} />
            <Route exact path='favoritos' element={<Favoritos />} />
            <Route exact path='confirm/:token' element={<Confirm />} />
          </Route>

          <Route exact path='/login' element={<Login />} />
          <Route exact path='/registro' element={<Register />} />

          {/* <Route path='*' element={<Navigate to={"/"} />} /> */}
          <Route path='*' element={<h1>No se encuentra</h1>} />
        </Routes>
      </LoginProvider>
    </>
  );
}

export default App;

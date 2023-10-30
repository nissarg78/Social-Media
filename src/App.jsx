import { useState } from 'react'
import Login from './components/login.jsx'
import Register from './components/Register.jsx'
import Home  from './components/home.jsx'
import Header from './components/Header.jsx'
import HomePage  from "./components/HomePage.jsx";
import React from 'react';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

// import {Layout} from './components/Layout'


function App() {

  return (


    <Router>
      {/* <Header/> */}
      {/* <Login/> */}
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/homePage" element={<HomePage/>}/>
    
      </Routes>
    </Router>
  );
}

export default App

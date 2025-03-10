import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Products from './pages/Products';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="app-background"></div>
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login.js';
import Product from './components/Product/Product.js';
import Loading from './components/Product/Loading.js';
import Cart from './components/Cart/Cart.js';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/product' element={<Product />} />
        <Route path='/loading' element={<Loading />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import {React, useState} from 'react';
import './index.css' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Nav';

import Home from './pages/Home'; 
import About from './pages/About'; 

import Menu from './pages/Menu';  
import Rewards from './pages/Rewards'; 

import NoMatch from './pages/NoMatch';
import SmoothieInfo from './pages/SmoothieInfo'; 
import ShoppingCart from './pages/shoppingCart';



function App() { 
  
  return ( 
    <Router> 
    <div className="flex-column justify-flex-start min-100-vh"> 
    <Header />  
    
    <div className='container'> 
    <Routes> 
      <Route 
        path="/" 
        element={<Home />} 
      />
      
      <Route 
        path="/about" 
        element={<About />} 
      /> 
     
      <Route 
        path="/menu" 
        element={<Menu />} 
      />
      <Route 
        path="/rewards" 
        element={<Rewards />} 
      /> 
       <Route 
        path="/cart" 
        element={<ShoppingCart />} 
      /> 
      <Route 
        path="/smoothieInfo/:id" 
        element={<SmoothieInfo />} 
      />
      <Route 
        path="*" 
        element={<NoMatch />} 
      />
    </Routes>
    </div>   
    </div> 
    </Router>
  );
}

export default App;

import React from 'react';
import './index.css' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Nav';

import Home from './pages/Home'; 
import About from './pages/About'; 
import Account from './pages/Account'; 
import Ingredients from './pages/Ingredients'; 
import Menu from './pages/Menu';  
import Rewards from './pages/Rewards'; 
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SmoothieInfo from './pages/SmoothieInfo';
import Signup from './pages/Signup'; 

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
        path="/ingredients" 
        element={<Ingredients />} 
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
        path="/signup" 
        element={<Signup />} 
      />
      <Route 
        path="/account" 
        element={<Account />} 
      />
      <Route 
        path="/rewards" 
        element={<Rewards />} 
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

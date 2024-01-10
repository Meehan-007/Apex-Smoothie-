import { React, useState, useEffect } from 'react';
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Nav';
import { loadStripe } from '@stripe/stripe-js';

// pages for paying for products 
import ShoppingCart from './pages/ShoppingCart';
import Completion from './pages/Completion';
import { CartProvider } from './contexts/CartContext';

// both pages show the menu items 
import Home from './pages/Home';
import Menu from './pages/Menu';


import About from './pages/About';



import Rewards from './pages/Rewards';


import NoMatch from './pages/NoMatch';

// nutrion page info
import SmoothieInfo from './pages/SmoothieInfo';





function App() {

  const [stripePromise, setStripePromise] = useState(null);

  useEffect(() => {

    const API_URL = process.env.NODE_ENV === 'production'
      ? 'https://apex-smoothies.herokuapp.com/'
      : 'http://localhost:3001/';

    fetch(`${API_URL}payment/config`).then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);


  return (

    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />

        <div className='container'>
          <CartProvider>
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
                element={<ShoppingCart stripePromise={stripePromise} />}
              />
              <Route
                path="/completion"
                element={<Completion stripePromise={stripePromise} />}
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
          </CartProvider>
        </div>
      </div>
    </Router>

  );
}

export default App;

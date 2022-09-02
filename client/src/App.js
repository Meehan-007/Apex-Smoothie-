import logo from './logo.svg'; 
import './index.css' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return ( 
    <Router> 
    <div className="App"> 
    <div className='container'> 
    <Routes> 
      <Route 
        path="/" 
        element={<Home />} 
      />
      <Route 
        path="/login" 
        element={<Login />} 
      />
      <Route 
        path="/signup" 
        element={<Signup />} 
      />
      <Route 
        path="/profile" 
        element={<Profile />} 
      />
      <Route 
        path="/thought/:id" 
        element={<SingleThought />} 
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

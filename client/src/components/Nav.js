import React from 'react';
import { Link } from 'react-router-dom'; 

import logo from '../assests/logo.png' 
import search from '../assests/Search.jpg' 
import profile_icon from '../assests/profile.png' 

//import Auth from '../utils/Auth'; 

const Header = () => {
  //  const logout = event => {
  //    event.preventDefault();
  //    Auth.logout();
  //  };
  
    return (
      <header className=" row space_between col-12 margin-top-S margin-bottom-S pagemarginleft pagemarginright">
        <div className="col-1 space_center">
          <Link to="/" id='a-0'>
            <img className="imagesize_large" src={logo} alt="logo"/>
          </Link>
          </div>  
          <div className='col-3'> </div>
          <nav className="col-4 space_evenly center"> 

          <Link to="/menu">
             Menu 
          </Link> 
          <Link to="/rewards">
           Rewards 
          </Link> 
          <Link to="/about">
          About
          </Link> 
          <img className="imagesize_small" src={search} alt="search"/>

          </nav>  
          <div className='col-2'> </div>
          <div className='col-1 row center auto-width'> 
                 {/* {Auth.loggedIn() ? (
              <>
                <Link to="/account">
                    <img src={profile_icon} alt="account icon"/>
                    </Link>
                
              </>
            ) : (
       //       <> */}
                <Link to="/login"> <p className="bold"> Login </p>  </Link>
                <Link to="/signup">
                    <button className='buttonSmall margin-left-M'> Signup </button> 
                    </Link>
              {/* </> */}
            {/* )}  */}
            </div>
        
      </header>
    );
  };
  
  export default Header;
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
      <header className="space_center col-12 pagemarginleft pagemarginright margin-top-L">
        <div className="space_between center w-100">
          <Link to="/">
            <img className="imagesize_large" src={logo} alt="logo"/>
          </Link>
  
          <nav className="col-3 space_evenly center"> 

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
          <div className='width-auto row center'> 
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
        </div>
      </header>
    );
  };
  
  export default Header;
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
      <header className="space_center">
        <div className="space_between center w-100">
          <Link to="/">
            <img src={logo} alt="logo"/>
          </Link>
  
          <nav className="col-3 space_evenly"> 

          <Link to="/menu">
            <h3> Menu </h3>
          </Link> 
          <Link to="/rewards">
          <h3> Rewards </h3>
          </Link> 
          <Link to="/about">
          <h3> About </h3>
          </Link> 
          <img src={search} alt="search"/>

          </nav> 
          <div> 
                 {/* {Auth.loggedIn() ? (
              <>
                <Link to="/account">
                    <img src={profile_icon} alt="account icon"/>
                    </Link>
                
              </>
            ) : (
       //       <> */}
                <Link to="/login"><h3>Login</h3></Link>
                <Link to="/signup">
                    <button className='buttonSmall'>Signup</button> 
                    </Link>
              {/* </> */}
            {/* )}  */}
            </div>
        </div>
      </header>
    );
  };
     

  // copy PAYPAL!
  export default Header;
import React, { useState } from "react"
import { Link } from 'react-router-dom'; 

import logo from '../assests/logo.png' 
import search from '../assests/Search.jpg' 
import profile_icon from '../assests/profile.png'  
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi" 
import {BiSearch} from  "react-icons/bi"

//import Auth from '../utils/Auth'; 

const Header = () => {
  //  const logout = event => {
  //    event.preventDefault();
  //    Auth.logout();
  //  }; 
  const closeMenu = () => {
    setNavbarOpen(false)
  }
  const [navbarOpen, setNavbarOpen] = useState(false) 
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }  
 

    return (
      <header className=" row space_between col-12 padding-top-S padding-bottom-S paddingleft paddingright navBar TabletS-w-90 heightfit">

<nav className="web-none TabletS-show"> 

<button onClick={handleToggle}>
  {navbarOpen ? (
    <MdClose style={{ color: "#fff" }} className='icon-size'/>
  ) : (
    <FiMenu style={{ color: "#7b7b7b" }} className='icon-size'/>
  )}
</button> 

<ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>  
<div className="col space_center margin-top-XL"> 
<Link
  to="/"
  activeClassName="active-link" 
  className="sidenav col space_center"
  onClick={() => closeMenu()}
  exact
>
  Home
</Link>
<Link
  to="/menu"
  activeClassName="active-link" 
  className="sidenav"
  onClick={() => closeMenu()}
  exact>
  Menu
</Link> 
<Link
  to="/rewards"
  activeClassName="active-link" 
  className="sidenav"
  onClick={() => closeMenu()}
  exact>
  Rewards
</Link>
<Link
  to="/about"
  activeClassName="active-link" 
  className="sidenav"
  onClick={() => closeMenu()}
  exact>
  About
</Link>  
{/* <Link
  to="/signup"
  activeClassName="active-link" 
  className="sidenav"
  onClick={() => closeMenu()}
  exact>
  Sign Up
</Link>  
<Link
  to="/login"
  activeClassName="active-link" 
  className="sidenav"
  onClick={() => closeMenu()}
  exact>
  Login
</Link>  */}  </div> 
</ul>
  </nav> 

  {/* <BiSearch className="web-none TabletS-show icon-size" style={{ color: "#7b7b7b" }} /> */}


        <div className="col-1 space_center TabletS-none">
          <Link to="/" id='a-0'>
            <img className="imagesize_large" src={logo} alt="logo"/>
          </Link>
          </div>  

          <div className='col-3 tabletL-col-2 TabletS-none'> </div> 

          <nav className="col-4 space_evenly center tabletL-col-5 TabletS-none"> 
          <Link to="/">
            Home 
          </Link> 
          <Link to="/menu">
             Menu 
          </Link> 
          <Link to="/rewards">
           Rewards 
          </Link> 
          <Link to="/about">
          About
          </Link> 
          {/* <img className="imagesize_small" src={search} alt="search"/> */}

          </nav>   

          {/* <div className='col-2 tabletL-col-1 TabletS-none'> </div>  */}

          {/* <div className='col-1 row center auto-width tabletL-1 TabletS-none'> 
                 {/* {Auth.loggedIn() ? (
              <>
                <Link to="/account">
                    <img src={profile_icon} alt="account icon"/>
                    </Link>
                
              </>
            ) : (
       //       <> */}
                {/* <Link to="/login"> <p className="bold"> Login </p>  </Link>
                <Link to="/signup">
                    <button className='buttonSmall margin-left-M'> Signup </button> 
                    </Link>
              {/* </> */}
            {/* )}  */}
            {/* </div> */} 
        
      </header>
    );
  };
  
  export default Header;
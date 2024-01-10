import React, { useState } from "react"
import { Link } from 'react-router-dom'; 

import logo from '../assests/Logo.png' 
import search from '../assests/Search.jpg' 
import profile_icon from '../assests/Profile.png'  
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi" 
import {BiSearch} from  "react-icons/bi" 
import { HiOutlineShoppingCart } from "react-icons/hi"

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
      <header className="row space_between padding-top-M padding-bottom-M paddingleft paddingright navBar TabletS-w-90 heightfit">

<nav className="web-none TabletS-show"> 

<button onClick={handleToggle} id="Menu">
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
 </div> 
</ul>
  </nav> 

  <Link to="/cart" className="web-none TabletS-show"><HiOutlineShoppingCart className="icon-size" style={{ color: "#7b7b7b" }} /></Link>


        <div className="col-1 space_center TabletS-none">
          <Link to="/" id='a-0'>
            <img className="imagesize_large" src={logo} alt="logo"/>
          </Link>
          </div>  

    

          <nav className="col-6 space_evenly center TabletS-none"> 
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
          <Link to="/cart"> <HiOutlineShoppingCart className="icon-size" style={{ color: "#000000" }} /> </Link>
          </nav>   

        
        
      </header>
    );
  };
  
  export default Header;
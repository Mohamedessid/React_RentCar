import React, { Component } from 'react';
import logo from "../images/logo.png";
import "../css/navbar.css"
class Navbar extends Component{
  render(){
  return (
    <div className="App">
      <header class="header">
        <section class="flex">
        <a href="#Home" class="logo"><img src={logo}/></a>
                <nav class="navbar">
                    
                    <a href="#about">about</a>
                    <a href="#Services">Services</a>
                    <a href="#Contact">Contact</a>
                    <a href="#How">How it works</a>
                    <button className='btn'>Sign In</button>
                </nav>
                <div id="menu-btn" class="fas fa-bars"></div>
        </section>
    </header>
      
    </div>
  );
}
}

export default Navbar;

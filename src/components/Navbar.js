import React, { Component } from 'react';
import logo from "../images/logo.png";
import "../css/navbar.css"
/* react icons library*/
import {RiCustomerService2Line} from "react-icons/ri";
import {AiFillInfoCircle} from "react-icons/ai"
import {Ri24HoursFill} from "react-icons/ri"
import {AiFillQuestionCircle} from "react-icons/ai"



class Navbar extends Component{
  render(){
  return (
    <div className="App">
      <header class="header">
        <section class="flex">
        <a href="#Home" class="logo"><img src={logo}/></a>
                <nav class="navbar">
                    
                    <a href="#about"><AiFillInfoCircle/> about</a>
                    <a href="#Services"><Ri24HoursFill/> Services</a>
                    <a href="#Contact"><RiCustomerService2Line/> Contact</a>
                    <a href="#How"><AiFillQuestionCircle/> How it works</a>
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

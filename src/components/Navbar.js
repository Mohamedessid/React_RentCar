import React, { Component } from 'react';
import logo from "../images/lo_go.png";
import "../css/navbar.css";
/* react icons library*/
import {RiCustomerService2Line} from "react-icons/ri";
import {AiFillInfoCircle} from "react-icons/ai"
import {Ri24HoursFill} from "react-icons/ri"
import {AiFillQuestionCircle} from "react-icons/ai"
import {FaBars} from "react-icons/fa"
import {FaTimes} from "react-icons/fa"


class Navbar extends Component{
  render(){
  return (
    <div className="App">
      <header className='header'>
        <section className='flex'>
        <a href="#Home" className='logo'><img src={logo}/></a>
                <nav className='navbar'>
                    
                    <a href="#about"><AiFillInfoCircle/> about</a>
                    <a href="#Services"><Ri24HoursFill/> Services</a>
                    <a href="#Contact"><RiCustomerService2Line/> Contact</a>
                    <a href="#How"><AiFillQuestionCircle/> How it works</a>
                    <button className='btn'>Sign In</button>
                   
                </nav>
                
                <div id="menu-btn"><FaBars/></div> {/* displayed none in navbar.css */}
        </section>
    </header>
      
    </div>
  );
}

}

export default Navbar;

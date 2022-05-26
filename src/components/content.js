import React, { Component } from 'react'
import audi from '../images/audi.png';
import '../css/contents.css'



class Contents extends Component{

    render(){
        
        return(
                <div className='app'>
<div className="home-bg">

  <section className="home" id="home">
      <div className='flex'>
    <div className="content">

      <h3>Premuim <br/> Car Rental<br/> In Tunisia</h3>
      <p>
        Don't deny yourself the pleasure<br/> of Driving the best premuim cars<br/> here
        and now.
      </p>
      <a href="#about" className="btn get">
        Get started
      </a>
    </div>
     
   <div className='hr'></div>

    
    <img className='audi' src={audi}/>
    
    </div>
  </section>
</div>

                </div>
        );
    }
}
export default Contents;
import React, { Component } from "react";
import '../css/SecondContent.css';
import firstCar from "../images/first-car.jpg";
import secondCar from "../images/seconcar.jpg"
class SecondContent extends Component{
    render(){
        return(
            <div className="App">
                <section className="cars">
                    <div className="head">
                        <h3>What cars we have in MyCar?</h3>
                        <p>we Provide Our costumers with the most incrdible Driving emotions
that's why we have multiple car's choices</p>
                    </div>
                    <div className="flex-two">
                        <div className="first-car">
                            <img src={firstCar}/>
                            <h4>Small and practical</h4>
                            <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit 
consectetur adipiscing elit Lorem ipsum dolor sit</p>
                            <div className="boxe">
                         <h5>   <a href="#" > Start at 70Dt/day</a></h5>
                            <h6>+70 cars</h6>
                            </div>
                        </div>
{/* second choice */}
                    
                    
                        <div className="first-car mod">
                            <img src={secondCar}/>
                            <h4>Spacious</h4>
                            <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit 
consectetur adipiscing elit Lorem ipsum dolor sit</p>
                            <div className="boxe">
                         <h5>   <a href="#" > Start at 100Dt/day</a></h5>
                            <h6>+70 cars</h6>
                            </div>
                        </div>

                    
                    <div className="flex-two">
                        <div className="first-car">
                            <img src={firstCar}/>
                            <h4>Luxurious</h4>
                            <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit 
consectetur adipiscing elit Lorem ipsum dolor sit</p>
                            <div className="boxe">
                         <h5>   <a href="#" > Start at 200Dt/day</a></h5>
                            <h6>+70 cars</h6>
                            </div>
                        </div>
                        </div>
                    </div>
                    
                </section>
            </div>
        )
    }
}
export default SecondContent ;
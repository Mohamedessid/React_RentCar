import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Contents from './components/content';
import SecondContent from './components/Cars';

class App extends Component{
  render(){
   return (
    <>
    <Navbar/>,
    <Contents/>,
    <SecondContent/>
    </>
  );
}
}

export default App;
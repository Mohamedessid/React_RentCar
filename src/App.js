import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Contents from './components/content';

class App extends Component{
  render(){
   return (
    <>
    <Navbar/>,
    <Contents/>
    </>
  );
}
}

export default App;
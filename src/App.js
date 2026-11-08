import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        
        <h1>Welcome to Fullstack Development - I</h1>
        <h3>React JS Programming Week09 Lab exercise</h3>
        
        
        <div style={{ margin: '20px 0', fontSize: '1.2rem' }}>
          <p>101550625</p> 
          <p>Omar Butt</p>   
        </div>
        
        <p>George Brown College, Toronto</p>
      </header>
    </div>
  );
}

export default App;
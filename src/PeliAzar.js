//<PeliAzar/>
import './App.css';
import logo from './logo.svg';
import React,{Component} from 'react';

  

function PeliAzar() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <p>
            Esta es una película al azar. (dentro de ella debemos cargar el nuevo componente del titulo)
          </p>
  
          </header>
      </div>
    );
  }


export default PeliAzar;
  
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PeliAzar from './PeliAzar';
import reportWebVitals from './reportWebVitals';
import Poster from './Poster.js'



document.body.addEventListener("load", random());
function random(){
  const randomNumberInRange = (min, max) =>
     Math.floor(Math.random() * (max - min)) + min;
     const random = randomNumberInRange(0,6)
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <Poster pelicula={random} />
      </React.StrictMode>
  );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

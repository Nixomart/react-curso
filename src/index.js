import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/*

    ARCHIVO PRINCIPAL DONDE SE LANZA EL PROYECTO

*/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  //Este root es ID, que lo busca en el html real que se encuentra en public index.html
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

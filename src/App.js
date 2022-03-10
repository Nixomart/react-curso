import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
//el nombre de la funcion debe ir a corde por lo general al nombre del archivo app
function App() {

  //const for set to span, setlinea1 se va setear usando el useState si ponemos 
  //algo ahi se va poner en el array1 osea linea1
const [linea1,setLinea1] = useState('');
const [linea2,setLinea2] = useState('');

//funcion constante para abrir el evento en un aler este evento sera el input que 
//agreguemos, tendremos que gregar sus metodos para que nos muestre el valor

//escribiendo setLinea1 llamos a la funcion set que devolvera lo que en el input 
//este escrito y react lo toma como un componente que se estara actualizando
//a cada rato el html entonces podemos escribir libremente
const onChangeLinea1 = function(evento){
  setLinea1(evento.target.value);
}
const onChangeLinea2 = function(evento){
  setLinea2(evento.target.value);
}

  //retorna codigo html entre ()
  return (
    <div className="App">
      
      {// selec memes img 
      }
      <select>
        <option value="meme1">plantilla 1</option>
        <option value="meme2">plantilla 2</option>
      </select><br />

      
      
      {//input for first line
      } 
      <input onChange={onChangeLinea1} type="text" placeholder="linea 1 de meme"></input><br />
      
      
      
      {//input for second line
      } 
      <input onChange={onChangeLinea2} type="text" placeholder="linea 2 de meme"></input><br />
      
      
      
      
      {//button's export
      }
      <button >Exportar momo :V </button>
      
      
      {//span for the lines written in the inputs
      } 
      <div>
        <span>{linea1}</span><br />
        <span>{linea2}</span>
      </div>

    </div>
  );
}

export default App;

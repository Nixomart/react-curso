import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';
function App() {

//manejo de estados
  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [img, setImg] = useState('');

//manejo de funciones con los estados declarados
  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value);
  }
  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value);
  }
  const onChangeImg = function (evento) {
    setImg(evento.target.value);
  }
  //funcion para el boton exportar importando libreria de html2canvas
  //captura la imagen y en este caso la pega de neuvo en el html
  const onClickExport = function (evento) {

    //funcion flecha canvas que se va a ejecturar cuando se haya procesado todo lo anterior
    //meme viene del id del div donde se encuentra la imagen y los span
    html2canvas(document.querySelector("#meme")).then(canvas => {
      
      let img    = canvas.toDataURL("image/jpg");
      //escribe la url de la imagen
      //document.write('<img src="'+img+'"/>');
      
      //creamos un elemtno ancla
      let link = document.createElement('A');
      link.download = 'meme.jpg';
      //el href va hacer la imagen convertida a url en la linea 29
      link.href = img;
      link.click();
      
  });
  }


  return (
    <div className="App">

     
      <select onChange={onChangeImg}>
        {// el value es el nombre de la imagen sin el png para que concatenee bien en la 
        //funcion onChange
        }
        <option value="gustavo">plantilla 1</option>
        <option value="tipoPensando">plantilla 2</option>
      </select><br />

      <input onChange={onChangeLinea1} type="text" placeholder="linea 1 de meme"></input><br />
      <input onChange={onChangeLinea2} type="text" placeholder="linea 2 de meme"></input><br />

      <button onClick={onClickExport}>Exportar momo :V </button>

      <div className="flex-div" id="meme">
        <span>{linea1}</span><br />
        <span>{linea2}</span>
        <img src={"/img/"+ img +".jpg"}></img>
      </div>

    </div>
  );
}

export default App;

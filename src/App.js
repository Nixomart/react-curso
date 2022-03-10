import logo from './logo.svg';
import './App.css';
//el nombre de la funcion debe ir a corde por lo general al nombre del archivo app
function App() {

  /*
  
                aqui puede haber codigo js como simpre 
                ej:


  */

  let nombre = "nico";
  let saludo = <p>
  HOLA CEPEREROS SOY {nombre}<br />
  Edit <code>src/App.js</code> and save to reload.
</p>
  //retorna codigo html entre ()
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {saludo}        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

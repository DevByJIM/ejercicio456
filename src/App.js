import './App.css';
import Clock from './components/Clock';
import ClockF from './components/ClockF';

function App() {
  return (
    <div className="App">

      <h1 >BootCAMP Ejercicios 4,5,6</h1>

      <div className='clock'>
        <h2 className='title'>Componente Class</h2>
        <Clock />
      </div>
      <br />
      <div className='clock'>
        <h2 className='title'>Componente Function</h2>
        <ClockF className="clock" />
      </div>


    </div>
  );
}

export default App;

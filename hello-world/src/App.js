import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name = "Swara" age = "5">  
        <p> Child Property </p>
       </Greet> 
      <Greet name = "Sahith" age = "15">
        <button>Sahith</button>
         </Greet>
      <Greet name = "Pavan" age = "20"> 
        <hr />
       </Greet>

       <Welcome name = "Swara" age = "5">  
        <p> Child Property </p>
       </Welcome> 
      <Welcome name = "Sahith" age = "15">
        <button>Sahith</button>
         </Welcome>
      <Welcome name = "Pavan" age = "20" /> 
    </div>
  );
}

export default App;

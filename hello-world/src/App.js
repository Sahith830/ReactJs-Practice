import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'

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
    </div>
  );
}

export default App;

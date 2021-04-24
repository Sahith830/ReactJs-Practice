import logo from './logo.svg';
import './App.css';
import * as Greet from './components/Greet'
import Welcome from './components/Welcome'
import * as Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      <Greet.Greet1 />
      <Greet.Greet2 />
      <Greet.Greet3 />

      <Welcome />
      <Welcome />

      <Hello.WithJSX />
      <Hello.WithoutJSX />
    </div>
  );
}

export default App;

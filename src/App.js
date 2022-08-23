import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter/Counter';
import ReduxCounter from './Components/ReduxCounter/ReduxCounter';

function App() {
  return (
    <div className="App">
     <h1>hello boos</h1>
     <Counter></Counter>
     <ReduxCounter/>
    </div>
  );
}

export default App;

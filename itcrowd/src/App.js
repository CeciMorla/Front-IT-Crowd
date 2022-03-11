import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path='/' component={Home}/>
      <Route exact path='/:id' component={Detail}/>
    </div>
    </BrowserRouter>
  );
}

export default App;

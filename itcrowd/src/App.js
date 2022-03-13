import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail'
import Login from './components/Login/Login';
import CreateProduct from './components/CreateProduct/CreateProduct';
import PutProduct from './components/PutProduct/PutProduct';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route exact path='/' component={Home}/>
      <Route exact path='/detail/:id' component={Detail}/>
      <Route exact path='/home/login' component={Login}/>
      <Route exact path='/create' component={CreateProduct}/>
      <Route exact path='/put/:id' component={PutProduct}/>
    </div>
    </BrowserRouter>
  );
}

export default App;

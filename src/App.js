import './App.css';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import NavBar from './navbar';
import Home from './home';
function App() {
  return (
    <div className="App">
      <Router>
        <div>

          <NavBar/>

          <Route path='/' exact>
            <Home/>
          </Route>

          <Route path='/authors' exact>
            
          </Route>

          <Redirect to='/' />
        </div>
      </Router>
     
    </div>
  );
}

export default App;

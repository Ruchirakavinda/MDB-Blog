import './App.css';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import NavBar from './navbar';
import Home from './home';
import Footer from './footer';
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

          <Footer/>
        </div>
      </Router>
     
    </div>
  );
}

export default App;

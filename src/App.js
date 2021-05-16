// src/App.js
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar1";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
// import NewScribl from './components/NewScribl';
// import Scribls from './components/Scribls';
 //import withAuth from "./components/withAuth";
//import UploadFile from './components/UploadPhoto';
//import Routes from './Routes';

function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <Navbar />
        </div>
        <div>
        <Switch>
          <Route exact path='/' component={Home} /> 
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

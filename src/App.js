// src/App.js
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar1";
import Signup from "./components/Signup";
import Login from "./components/Login";
import withAuth from "./components/withAuth";
import UploadFile from './components/UploadPhoto';
import Root from './components/Root';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Root} />
          <Route
            exact
            path='/scribl/new'
            component={withAuth(UploadFile)}
          />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

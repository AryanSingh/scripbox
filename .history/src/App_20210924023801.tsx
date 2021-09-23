import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import LoginScreen from './screens/LoginScreen';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <Router>
        <Switch>
        <Route path="/login">
          <LoginScreen/>
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;

import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from "./screens/HomeScreen";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div>
      {
        !authenticated? <LoginScreen authenticated={authenticated} setAuthenticated={setAuthenticated} />:
          <Router>
            <Switch>
              <Route path="/home">
                <HomeScreen />
              </Route>
              <Route path="/">
                <HomeScreen />
              </Route>
            </Switch>
          </Router>
      }
    </div>
  );
}

export default App;

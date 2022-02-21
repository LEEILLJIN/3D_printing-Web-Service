import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/index';
import SigninPage from './pages/signin'

function App() {
  return (
    <>
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path = '/' component = {Home} exact={true}/>
        <Route path = '/signin' component = {SigninPage} exact={true}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;

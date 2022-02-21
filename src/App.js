import React from 'react';
import './App.css';
import {BrowserRouter as HashRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/index';
import SigninPage from './pages/signin'

function App() {
  return (
    <>
    <HashRouter>
      <Switch>
        <Route path = '/' component = {Home} exact={true}/>
        <Route path = '/signin' component = {SigninPage} exact={true}/>
      </Switch>
    </HashRouter>
    </>
  );
}

export default App;

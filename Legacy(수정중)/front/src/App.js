import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/index';
import SigninPage from './pages/signin'
import PrintSettingPage from './pages/printsetting';
import PaymentPage from './pages/payment';
import QnAPage from './pages/Q&A';
import PrintStart from './pages/printstart'

function App() {
  return (
    <>
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path = '/' component = {Home} exact={true}/>
        <Route path = '/signin' component = {SigninPage} exact={true}/>
        <Route path = '/Q&A' component = {QnAPage} exact={true}/>
        <Route path = '/printsetting' component = {PrintSettingPage} exact={true}/>
        <Route path = '/payment' component={PaymentPage}/>
        <Route path = '/printstart' component={PrintStart}/>
      </Switch>
    </Router>
    </>
  );
}
// <Router basename={process.env.PUBLIC_URL}> -> 배포한 후 routing이 의도한 데로 되지않아 추가함
//참고 : https://stackoverflow.com/questions/42686149/cant-build-create-react-app-project-with-custom-public-url?rq=1 
export default App;

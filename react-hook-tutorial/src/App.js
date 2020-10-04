import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import MyUseState from './pages/useState'
import MyUseEffect from './pages/useEffect'
import Home from './home'
export default class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <Switch> 
      <Route path='/use-effect' component={MyUseState}></Route>  
      <Route path='/use-state' component={MyUseEffect}></Route>
      <Route path='/' component={Home}></Route>
      </Switch>
      </BrowserRouter>
    );
  }
}

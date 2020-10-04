import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link,Redirect } from "react-router-dom";
import MyUseState from "./pages/useState";
import MyUseEffect from "./pages/useEffect";
import MyUseRef from './pages/useRef';
import MyUseContext from './pages/useContext'
import MyUseMemo from './pages/useMemo'
import MyUseCallback from './pages/useCallback'
import MyUseImperitiveHandle from './pages/useImperativeHandle'
import MyUseLayout from './pages/useLayout'
import MyUseReducer from './pages/useReducer'

export default class Home extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Link to="/use-effect">useEffect</Link><span> | </span>
            <Link to="/use-state">useState</Link><span> | </span>
            <Link to="/use-ref">MyUseRef</Link><span> | </span>
            <Link to="/use-context">MyUseContext</Link><span> | </span>
            <Link to="/use-memo">MyUseMemo</Link><span> | </span>
            <Link to="/use-callback">MyUseCallback</Link><span> | </span>
            <Link to="/use-imperitivehandle">MyUseImperitiveHandle</Link><span> | </span>
            <Link to="/use-layout">MyUseLayout</Link><span> | </span>
            <Link to="/use-reducer">MyUseReducer</Link><span> | </span>
          </div>
          <Switch>
            <Route path="/use-effect" component={MyUseState}></Route>
            <Route path="/use-state" component={MyUseEffect}></Route>
            <Route path="/use-ref" component={MyUseRef}></Route>
            <Route path="/use-context" component={MyUseContext}></Route>
            <Route path="/use-memo" component={MyUseMemo}></Route>
            <Route path="/use-callback" component={MyUseCallback}></Route>
            <Route path="/use-imperitivehandle" component={MyUseImperitiveHandle}></Route>
            <Route path="/use-layout" component={MyUseLayout}></Route>
            <Route path="/use-reducer" component={MyUseReducer}></Route>
            <Redirect to="/use-state"></Redirect>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

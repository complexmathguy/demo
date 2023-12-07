import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomePageComponent from './components/HomePageComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListBodyComponent from './components/ListBodyComponent';
import CreateBodyComponent from './components/CreateBodyComponent';
import UpdateBodyComponent from './components/UpdateBodyComponent';
import ViewBodyComponent from './components/ViewBodyComponent';
import ListBrakingComponent from './components/ListBrakingComponent';
import CreateBrakingComponent from './components/CreateBrakingComponent';
import UpdateBrakingComponent from './components/UpdateBrakingComponent';
import ViewBrakingComponent from './components/ViewBrakingComponent';
import ListChassisComponent from './components/ListChassisComponent';
import CreateChassisComponent from './components/CreateChassisComponent';
import UpdateChassisComponent from './components/UpdateChassisComponent';
import ViewChassisComponent from './components/ViewChassisComponent';
import ListEngineComponent from './components/ListEngineComponent';
import CreateEngineComponent from './components/CreateEngineComponent';
import UpdateEngineComponent from './components/UpdateEngineComponent';
import ViewEngineComponent from './components/ViewEngineComponent';
import ListInteriorComponent from './components/ListInteriorComponent';
import CreateInteriorComponent from './components/CreateInteriorComponent';
import UpdateInteriorComponent from './components/UpdateInteriorComponent';
import ViewInteriorComponent from './components/ViewInteriorComponent';
import ListTransmissionComponent from './components/ListTransmissionComponent';
import CreateTransmissionComponent from './components/CreateTransmissionComponent';
import UpdateTransmissionComponent from './components/UpdateTransmissionComponent';
import ViewTransmissionComponent from './components/ViewTransmissionComponent';
#outputExtraInclusionComponents()
function App() {
  return (
    <div>
        <Router>
                <HeaderComponent className="header"/>
                <div className="container">
                    <Switch>
                          <Route path = "/" exact component = {HomePageComponent}></Route>
                            <Route path = "/bodys" component = {ListBodyComponent}></Route>
                            <Route path = "/add-body/:id" component = {CreateBodyComponent}></Route>
                            <Route path = "/view-body/:id" component = {ViewBodyComponent}></Route>
                          {/* <Route path = "/update-body/:id" component = {UpdateBodyComponent}></Route> */}
                            <Route path = "/brakings" component = {ListBrakingComponent}></Route>
                            <Route path = "/add-braking/:id" component = {CreateBrakingComponent}></Route>
                            <Route path = "/view-braking/:id" component = {ViewBrakingComponent}></Route>
                          {/* <Route path = "/update-braking/:id" component = {UpdateBrakingComponent}></Route> */}
                            <Route path = "/chassiss" component = {ListChassisComponent}></Route>
                            <Route path = "/add-chassis/:id" component = {CreateChassisComponent}></Route>
                            <Route path = "/view-chassis/:id" component = {ViewChassisComponent}></Route>
                          {/* <Route path = "/update-chassis/:id" component = {UpdateChassisComponent}></Route> */}
                            <Route path = "/engines" component = {ListEngineComponent}></Route>
                            <Route path = "/add-engine/:id" component = {CreateEngineComponent}></Route>
                            <Route path = "/view-engine/:id" component = {ViewEngineComponent}></Route>
                          {/* <Route path = "/update-engine/:id" component = {UpdateEngineComponent}></Route> */}
                            <Route path = "/interiors" component = {ListInteriorComponent}></Route>
                            <Route path = "/add-interior/:id" component = {CreateInteriorComponent}></Route>
                            <Route path = "/view-interior/:id" component = {ViewInteriorComponent}></Route>
                          {/* <Route path = "/update-interior/:id" component = {UpdateInteriorComponent}></Route> */}
                            <Route path = "/transmissions" component = {ListTransmissionComponent}></Route>
                            <Route path = "/add-transmission/:id" component = {CreateTransmissionComponent}></Route>
                            <Route path = "/view-transmission/:id" component = {ViewTransmissionComponent}></Route>
                          {/* <Route path = "/update-transmission/:id" component = {UpdateTransmissionComponent}></Route> */}
#outputExtraRoutePaths()
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;

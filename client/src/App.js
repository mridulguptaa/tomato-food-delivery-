import React from 'react';
import {Switch, Route,BrowserRouter} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomePage from "./components/HomePage/HomePage";
import CustomerHomePage from "./components/CustomerHomePage/CustomerHomerPage";
{/*import HelloWorld from "./components/HelloWorld/HelloWorld";*/}


function App() {
  return (
    <div className="App">

      
     
      <BrowserRouter>
      
        <Switch>
            <Route path = "/customer" component = {CustomerHomePage}></Route>
            {/* <Route path = "/restaurant" component = {RestaurantHomePage}></Route> */}
            <Route path = "/" component = {HomePage}></Route>
        </Switch>
      </BrowserRouter>


      
        
    </div>
  );
}

export default App;

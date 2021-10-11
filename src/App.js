import React from "react";
import './app.css';
import  Nav from "./nav";
import  login from "./login";
import  Shop from "./shop";
import  register from "./register";
import ItemDetail from "./itemDetail";
import Home from "./home";
import ChampDetail from "./champDetail";


import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div class="text-center font-Friz bg-gold  h-screen overflow-x-scroll" >
      <Nav/>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/register" exact component={register}/>
      <Route path="/login" exact component={login} />
      <Route path="/shop" exact component={Shop}/>
      <Route path="/shop/:id" component={ItemDetail}/>
      <Route path="/champ/:id" component={ChampDetail}/>
      </Switch>
      
    </div>
    </Router>
    
  )
}



export default App;

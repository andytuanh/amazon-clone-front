import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Login from './Login';
import './style.css';
import Img from './img.jpg';
import { getFavicon } from './utils'
import { HeadProvider, Title, Link, Meta } from 'react-head'
import FavIcon from './images/favicon.ico'

function App() {

  const fav = getFavicon('sam') != '' ? getFavicon('sam') : FavIcon

  return (
    <HeadProvider>
      <Router>
        <div className="App">
          <Link rel="icon" href={fav} />
          <Switch>
            <Route path="/checkout">
              <Header />
              <h1>Checkout</h1>
            </Route>
            <Route path="/login">
              <Header />
              <Login />
            </Route>
            <Route path="/img">
              <Header />
              <div className="bgImage">
                <img src={Img} alt="" />
              </div>
            </Route>
            {/* this is the default route */}
            <Route path="/">
              <Header />
              <Home />
            </Route>

          </Switch>
        </div>
      </Router>
    </HeadProvider>
  );
}

export default App;

import './App.css';
import React, { useEffect } from "react"; 
import Header from './Header';
import Home from './Home';
import Login from './Login'
import Payment from './Payment'
import Checkout from './Checkout'
import Orders from './Orders'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from './firebase';
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51IF6lZCRSKAqYrLggrQnoyJjPEDTsZh0DDtGKf5lP8JFqd6BU28nNHQ0U0kzxtW5PO4QKxbxnzfHazAUeuzOeHfd006u5v3OE0');


function App() {
  const[{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS: ', authUser);

      if(authUser){
        //the user logged in/ or was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user logged out
        dispatch ({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    //BEM convention App/app
    <Router>
      <div className="app">
      <Switch> 
      <Route path="/orders">
        <Header />
        <Orders />
        </Route>
      <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
          <Payment />
          </Elements>
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;

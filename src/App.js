import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Cart from "./components/Cart/Cart";
import Header from './components/Header/Header';
import Products from "./components/Products/Products";
import Checkout from './components/Checkout/Checkout'
import Filter from "./components/Filter/Filter";
import Signup from "./components/Signup/Signup";
import Login from './components/Login/Login'

import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{basket},dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        
        dispatch({
          type: "LOGOUT",
          user: null,
        });
      }
    });
  }, [dispatch]);

  console.log(basket)

  return (
    <div className="app">
      <Router>
        <Header/>
        <ToastContainer/>
        <Switch>
          <Route path='/' exact>
           <Products/>
          </Route>

          <Route path='/cart' exact>
           <Cart/>
          </Route>

          <Route path='/checkout' exact>
           <Checkout/>
          </Route>

          <Route path='/filter' exact>
           <Filter/>
          </Route>

          <Route path='/login' exact>
           <Login/>
          </Route>

          <Route path='/register' exact>
           <Signup/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from './StateProvider';
import {auth} from './firebase';

function App() {
  const [{user},dispatch] = useStateValue();

  //Piece of code which runs based on a given condition 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        //the user is logged in..

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }
      else{
        //the user is logged out..
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //Any Cleanup opeartions go in here..
      unsubscribe();
    }
  }, []);

  console.log("User is >>>",user);

  return (
    <Router>
     <Switch>
      <Route path="/checkout">
        <Header />
        <Checkout />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    {/*This is the default route, */}
      <Route path="/">
        <Header />
        <Home />
      </Route>
     </Switch>
    </Router>
  );
}
/* We need React-Router: By This we can hace multi page fucntionality*/
     /*For example => local.host.com/login */ 

export default App;

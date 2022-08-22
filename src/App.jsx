import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./components/auth/login/Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./components/payment/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./components/oders/Orders";


const promise = loadStripe(
  'pk_test_51LYXN4IUenqC3jKXZ1j55vfQmE88m28j4lO2Tb3W1nphKkDdtEa1QdpakDYXyCUFLFBfEOqGuwRweEok0QWQe49r00w4cgC5O7'
);


function App() {

  const [{user}, dispatch] = useStateValue();

  useEffect(()=> {
    // will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('The user is =>>>>', authUser);
      if(authUser){
        // logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        //logged out
         dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []);

  return (
    <Router>
      <div className="App">
          <Header/>
          <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route exact path='/login' element={<Login />}></Route>
              <Route exact path='/payment' element={<Elements stripe={promise}><Payment /></Elements>}></Route>
              <Route exact path='/checkout' element={<Checkout />}></Route>
              <Route exact path='/orders' element={<Orders />}></Route>
              <Route exact path='*' element={<Home />}></Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;

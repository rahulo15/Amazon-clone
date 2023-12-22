import React, { useEffect } from "react";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";
import Payment from "./Payment/Payment";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "not_your_actual_stripe_key_just_some_random_words_to_make_it_work"
);

function App() {
  const [{ basket }, dispatch] = useStateValue();
  useEffect(() => {
    //will only run once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        //the user just logged in or the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM convention
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          ></Route>
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

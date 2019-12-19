import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import store from "./state";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ToastContainer autoClose={3000} />
      <div className="App">
        <Switch></Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;

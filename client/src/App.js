import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./sass/global.scss";

import NavBar from "./common/Navbar/Nav";
import Routes from "./routes";

import store from "./state";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <ToastContainer autoClose={3000} />
      <div className="App">
        <NavBar />
        <Routes />
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;

import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";

const App = () => (
  <div className="">
    <Login />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

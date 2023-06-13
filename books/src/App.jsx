import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Books from "./components/Books";

const App = () => (
  <div className="">
    <Books />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

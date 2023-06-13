import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Test from "./components/Test";

import Login from "auth/Login";
import Register from "auth/Register";
import Books from "books/Books";
// import booksRemote from "remotes/books.remote.js"

export const App = () => {
  return (
    <div className="host-page">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Test />} />
          <Route path="/books" element={<Books />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));

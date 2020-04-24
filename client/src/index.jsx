import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";

// Q: what's going on here with mountNode?
const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);

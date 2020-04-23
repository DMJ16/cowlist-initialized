import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return <div>Cow List</div>;
  }
}

// Q: what's going on here with mountNode?
const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);

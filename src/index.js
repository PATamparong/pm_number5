import React, { Component } from "react";
import ReactDOM from "react-dom";
import Countdown from "./Countdown";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div>
        <Countdown />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

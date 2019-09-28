import React, { Component } from "react";
import ReactDOM from "react-dom";
import Stopwatch from "./Stopwatch";
import Countdown from "./Countdown";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div>
        <Stopwatch />
        <Countdown />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

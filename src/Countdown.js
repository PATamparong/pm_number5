import React, { Component } from "react";

class Countdown extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime
    });
    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 10;
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime
        });
      } else {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
        alert("Countdown ended");
      }
    }, 10);
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };
  resetTimer = () => {
    if (this.state.timerOn === false) {
      this.setState({
        timerTime: this.state.timerStart
      });
    }
  };

  adjustTimer = input => {
    const { timerTime, timerOn } = this.state;
    const max = 216000000;
    if (!timerOn) {
      if (input === "incHours" && timerTime + 3600000 < max) {
        this.setState({ timerTime: timerTime + 3600000 });
      } else if (input === "decHours" && timerTime - 3600000 >= 0) {
        this.setState({ timerTime: timerTime - 3600000 });
      } else if (input === "incMinutes" && timerTime + 60000 < max) {
        this.setState({ timerTime: timerTime + 60000 });
      } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
        this.setState({ timerTime: timerTime - 60000 });
      } else if (input === "incSeconds" && timerTime + 1000 < max) {
        this.setState({ timerTime: timerTime + 1000 });
      } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
        this.setState({ timerTime: timerTime - 1000 });
      } else if (input === "milSeconds" && timerTime - 100 >= 0) {
        this.setState({ timerTime: timerTime - 100 });
      }
    }
  };

  render() {
    const { timerTime, timerStart, timerOn } = this.state;
    let milliseconds = ("0" + (Math.floor(timerTime / 100) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);
    return (
      <div>
        <div className="Countdown-label">
          <h1 style={{ color: "green" }}>Countdown timer</h1>
          <div>
            <label style={{ color: "green", fontfamily: "cursive" }}>
              COMPONENT:
            </label>
          </div>
          <br />
          Hours : Minutes : Seconds : Milliseconds
        </div>
        <br />
        {hours} : {minutes} : {seconds} : {milliseconds}
        <div className="Countdown-display">
          <button
            style={{ color: "red" }}
            onClick={() => this.adjustTimer("incHours")}
          >
            &#8679;
          </button>
          <button
            style={{ color: "red" }}
            onClick={() => this.adjustTimer("incMinutes")}
          >
            &#8679;
          </button>
          <button
            style={{ color: "red" }}
            onClick={() => this.adjustTimer("incSeconds")}
          >
            &#8679;
          </button>
          <button
            style={{ color: "blue" }}
            onClick={() => this.adjustTimer("decHours")}
          >
            &#8681;
          </button>
          <button
            style={{ color: "blue" }}
            onClick={() => this.adjustTimer("decMinutes")}
          >
            &#8681;
          </button>
          <button
            style={{ color: "blue" }}
            onClick={() => this.adjustTimer("decSeconds")}
          >
            &#8681;
          </button>
          <button
            style={{ color: "blue" }}
            onClick={() => this.adjustTimer("milSeconds")}
          >
            &#8681;
          </button>
          <br />
          <br />
          {timerOn === false && (timerStart === 0 || timerTime === timerStart) && (
            <button
              style={{ backgroundColor: "aqua" }}
              onClick={this.startTimer}
            >
              Start
            </button>
          )}
          {timerOn === true && timerTime >= 1000 && (
            <button style={{ backgroundColor: "red" }} onClick={this.stopTimer}>
              Stop
            </button>
          )}
          {timerOn === false &&
            (timerStart !== 0 &&
              timerStart !== timerTime &&
              timerTime !== 0) && (
              <button
                style={{ backgroundColor: "green" }}
                onClick={this.startTimer}
              >
                Resume
              </button>
            )}
          {(timerOn === false || timerTime < 1000) &&
            (timerStart !== timerTime && timerStart > 0) && (
              <button
                style={{ backgroundColor: "yellow" }}
                onClick={this.resetTimer}
              >
                Reset
              </button>
            )}
        </div>
      </div>
    );
  }
}
export default Countdown;

// src/App.js
import React, { Component } from "react";
import "./App.css";
import "./work.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false
    };
  }

  handleClick = () => {
    this.setState({ on: !this.state.on });
  };

  render() {
    const work = this.state.on ? "homerISworking" : "homerISdrinking";
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="https://seeklogo.com/images/S/Simpsons-logo-FB21A7C03F-seeklogo.com.png"
            className="App-logo"
            alt="logo"
          />
          <h1 className="App-title">Is Homer working ?</h1>
          <div className="Workin">
            <button onClick={this.handleClick} className={work}>
              {work.toUpperCase()}
            </button>
            <figure className={work} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;

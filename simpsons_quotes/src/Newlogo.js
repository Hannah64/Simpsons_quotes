import React, { Component } from "react";
import "./App.css";

class Newlogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switch: false
    };
  }
  changeSpeed = () => {
    this.setState({
      switch: !this.state.switch
    });
  };

  render() {
    let classCSS;
    !this.state.switch
      ? (classCSS = "RoundSawBladeSlow")
      : (classCSS = "RoundSawBladeFast");
    return (
      <div>
        <img
          className={classCSS}
          src={this.props.url}
          alt={this.props.textImgMissing}
        />
        <button
          onClick={() => {
            this.changeSpeed();
          }}
        >
          button
        </button>
      </div>
    );
  }
}

export default Newlogo;

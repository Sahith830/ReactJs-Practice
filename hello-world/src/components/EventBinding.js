import React, { Component } from "react";

export class EventBinding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Helloooo",
    };
  }

  clickHandler() {
    this.setState({
      message: "Good afternoon",
    });
    console.log(this)
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.clickHandler()}>Click</button>
      </div>
    );
  }
}

export default EventBinding;

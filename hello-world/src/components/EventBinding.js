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
    console.log('this throws undefined in setState so bind this to clickHandler as in line 24')
    console.log(this)
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.clickHandler.bind(this)}>Click</button>
      </div>
    );
  }
}

export default EventBinding;

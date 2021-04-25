import React, { Component } from "react";

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message : 'Welcome Change'
        }
    }


    increment() {
        this.setState(
            {
                message : 'Thanks for Subscribing'
            }
        )
    }

  render() {
    return (
      <div>
        <h1>
            {this.state.message}
        </h1>
        <button onClick= { () => increment()} >Subscribe</button>
      </div>
    );
  }
}

export default Message;

import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    let message;
    if (this.state.isLoggedIn) {
      message = <div>Welcome Yash !</div>;
    } else {
      message = <div>Welcome Pavan !</div>;
    }
    return <div>{message}</div>;
  }
}

export default UserGreeting;

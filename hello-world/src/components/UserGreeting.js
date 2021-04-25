import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return this.state.isLoggedIn ? (
      <div>Welcome Yash !</div>
    ) : (
      <div>Welcome Pavan !</div>
    );
  }
}

export default UserGreeting;

import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>
          {" "}
          Hello Folks {this.props.name} aka {this.props.age}
        </h1>
        {this.props.children}
      </div>
    );
  }
}

export default Welcome;

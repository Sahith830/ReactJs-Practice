import React from "react";

// function Greet() {
//     return <h1> Hello People </h1>
// }

const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello People1 {props.name} , {props.age}
      </h1>
      {props.children}
    </div>
  );
};
export default Greet;

import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler('Swara')}>Wish</button>
    </div>
  );
}

export default ChildComponent;

import React from "react";

function Person({person}) {
  return (
    <div>
      <h2>
        {person.firstName} is {person.age} years old
      </h2>
    </div>
  );
}

export default Person;

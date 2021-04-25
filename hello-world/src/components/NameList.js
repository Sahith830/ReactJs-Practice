import React from "react";

function NameList() {
  const personsData = [
    {
      firstName: "Chaitanya",
      age: 20
    },
    {
      firstName: "Yashasree",
      age: 21
    }
  ]
  const personsList = personsData.map(person => (
    <h2>{person.firstName} is {person.age} years old</h2>
  ))
  return <div>{personsList}</div>;
}

export default NameList;

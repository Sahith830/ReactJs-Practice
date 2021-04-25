import React from "react";
import Person from "./Person";

function NameList() {
  const personsData = [
    {
      firstName: "Chaitanya",
      age: 20,
    },
    {
      firstName: "Yashasree",
      age: 21,
    },
  ];
  const personsList = personsData.map((person) => <Person person={person} />);

  console.log(personsList);

  return <div>{personsList}</div>;
}

export default NameList;

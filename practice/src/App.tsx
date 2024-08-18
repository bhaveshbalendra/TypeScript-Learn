import React from "react";

type Obj = {
  age: number;
  person: (x: number, y: number) => number;
};

interface Adder {
  (x: number, y: number): number;
  age: number;
}
export default function App() {
  function CreatePerson(obj: Obj): number {
    if (obj.age) {
      console.log(obj.person(2, 3));
      return 1;
    }
    return 3;
  }

  // Correctly passing an object of type Obj to the function
  const personObj = {
    age: 25,
    person: (x: number, y: number) => x + y,
  };

  return <div>{CreatePerson(personObj)}</div>;
}

import React from "react";
import { Comp1, Comp2 } from "./Comp";

function App() {
  console.log("hello");
  const a = 10;
  const b = 20;
  const date = new Date();

  return (
    <div>
      <p>a + b = {a + b}</p>
      <Comp1 />
      <p>datum: {date.toString()}</p>
      <Comp1 />
      <Comp2 />
    </div>
  );
}

export default App;

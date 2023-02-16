import React from "react";
import "./app.css";

const Component = () => {
  const dogs = ["dog1", "dog2", "dog3"]
  const newdogs = dogs.map(name => <li>{name}</li>)
  return (
    <div>
      <ul>
        {newdogs}
      </ul>
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      <p>Hello React</p>
      <Component />

    </div>
  );
}

export default App;

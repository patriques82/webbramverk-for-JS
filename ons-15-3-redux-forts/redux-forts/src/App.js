import { useState } from "react";
import CreateTodo from "./components/CreateTodo";
import ListTodos from "./components/ListTodos"

function App() {
  const [view, setView] = useState("LIST");

  switch (view) {
    case "CREATE":
      return <CreateTodo setView={setView} />;
    default: // LIST
      return <ListTodos setView={setView} />;
  }
}

export default App;

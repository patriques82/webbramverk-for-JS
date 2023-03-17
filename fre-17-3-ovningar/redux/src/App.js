import { useSelector } from "react-redux";

import CreateTodo from "./components/CreateTodo";
import ListTodos from "./components/ListTodos";
import CreateBook from "./components/CreateBook";
import ListBooks from "./components/ListBooks";

function App() {
  const view = useSelector(state => state.view)

  switch (view) {
    case "CREATE_TODO":
      return <CreateTodo />;
    case "LIST_TODOS":
      return <ListTodos />;
    case "CREATE_BOOK":
      return <CreateBook />;
    case "LIST_BOOKS":
      return <ListBooks />;
    default:
      return <ListTodos />;
  }
}

export default App;

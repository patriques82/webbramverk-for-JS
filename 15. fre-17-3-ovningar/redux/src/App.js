import { useSelector } from "react-redux";

import CreateTodo from "./components/CreateTodo";
import ListTodos from "./components/ListTodos";
import CreateBook from "./components/CreateBook";
import ListBooks from "./components/ListBooks";

const DebugWrapper = () => {
  const actions = useSelector(state => state.actions)
  return (
    <div className="border">
      <Content />
      <ul>
        {actions.map((action, idx) => (
          <li key={idx}>action: {action.type}, payload: {JSON.stringify(action.payload)}</li>
        ))}
      </ul>
    </div>
  )
}

function Content() {
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

export default Content;

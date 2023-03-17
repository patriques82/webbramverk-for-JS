import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { goToCreateTodo, goToListBooks } from "../reducers/viewReducer";

const ListTodos = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [displayedTodos, setDisplayedTodos] = useState("ALL") // "IMPORTANT", "UNIMPORTANT"

  const filteredTodos = todos.filter(todo => {
    switch (displayedTodos) {
      case "IMPORTANT":
        return todo.important;
      case "UNIMPORTANT":
        return !todo.important;
      default: // ALL
        return true;
    }
  })

  return (
    <div>
      <ul>
        {filteredTodos.map(({ id, content, important }) => (
          <li className={important ? "important" : ""} key={id}>
            {content}
          </li>
        ))}
      </ul>
      Important: <input id="imp" checked={displayedTodos === "IMPORTANT"} onChange={() => setDisplayedTodos("IMPORTANT")} type="radio"></input>
      <br />
      Unimportant: <input id="unimp" checked={displayedTodos === "UNIMPORTANT"} onChange={() => setDisplayedTodos("UNIMPORTANT")} type="radio"></input>
      <br />
      All: <input id="all" checked={displayedTodos === "ALL"} onChange={() => setDisplayedTodos("ALL")} type="radio"></input>
      <br />
      <button onClick={() => dispatch(goToCreateTodo())}>Create Todo View</button>
      <button onClick={() => dispatch(goToListBooks())}>List Books View</button>
    </div>
  )
}

export default ListTodos;
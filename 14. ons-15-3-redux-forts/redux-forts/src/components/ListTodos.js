import { useSelector, useDispatch } from "react-redux"
import { goToCreateTodo, goToListBooks } from "../reducers/viewReducer";

const ListTodos = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {todos.map(todo => <li key={todo.id}>{todo.content}</li>)}
      </ul>
      <button onClick={() => dispatch(goToCreateTodo())}>Create Todo View</button>
      <button onClick={() => dispatch(goToListBooks())}>List Books View</button>
    </div>
  )
}

export default ListTodos;
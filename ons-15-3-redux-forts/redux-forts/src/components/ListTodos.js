import { useSelector, useDispatch } from "react-redux"
import { goToCreateTodo } from "../reducers/viewReducer";

const ListTodos = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {todos.map(todo => <li key={todo.id}>{todo.content}</li>)}
      </ul>
      <button onClick={() => dispatch(goToCreateTodo())}>Create Todo</button>
    </div>
  )
}

export default ListTodos;
import { useDispatch } from "react-redux"
import { createTodo } from "../reducers/todosReducer";
import { goToListTodos } from "../reducers/viewReducer";

const CreateTodo = () => {
  const dispatch = useDispatch();

  const saveTodo = (event) => {
    event.preventDefault()
    const content = event.target.todo.value;
    dispatch(createTodo(content))
    dispatch(goToListTodos())
  }

  return (
    <form onSubmit={saveTodo}>
      Todo: <input id="todo" type="text"></input>
      <br />
      <button type="submit">Save Todo</button>
    </form>
  )
}

export default CreateTodo
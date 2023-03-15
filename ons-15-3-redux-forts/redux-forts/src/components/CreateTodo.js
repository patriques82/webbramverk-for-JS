import { useDispatch } from "react-redux"
import { createTodo } from "../reducers/todosReducer";

const CreateTodo = ({ setView }) => {
  const dispatch = useDispatch();

  const saveTodo = (event) => {
    event.preventDefault()
    const content = event.target.todo.value;
    dispatch(createTodo(content))
    setView("LIST")
  }

  return (
    <form onSubmit={saveTodo}>
      <input id="todo" type="text"></input>
      <br />
      <button type="submit">Save Todo</button>
    </form>
  )
}

export default CreateTodo
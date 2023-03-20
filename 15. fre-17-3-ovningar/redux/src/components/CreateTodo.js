import { useDispatch } from "react-redux"
import { createTodo } from "../reducers/todosReducer";
import { goToListTodos } from "../reducers/viewReducer";

const CreateTodo = () => {
  const dispatch = useDispatch();

  const saveTodo = (event) => {
    event.preventDefault()
    const content = event.target.todo.value;
    const important = event.target.important.checked;
    dispatch(createTodo(content, important))
    dispatch(goToListTodos())
  }

  return (
    <form onSubmit={saveTodo}>
      Todo: <input id="todo" type="text" />
      <br />
      Important: <input id="important" type="checkbox" />
      <br />
      <button type="submit">Save Todo</button>
    </form>
  )
}

export default CreateTodo
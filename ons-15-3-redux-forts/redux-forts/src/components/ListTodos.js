import { useSelector } from "react-redux"

const ListTodos = ({ setView }) => {
  const todos = useSelector(state => state);

  return (
    <div>
      <ul>
        {todos.map(todo => <li key={todo.id}>{todo.content}</li>)}
      </ul>
      <button onClick={() => setView("CREATE")}>Create Todo</button>
    </div>
  )
}

export default ListTodos;
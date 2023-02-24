import { useState } from "react";

/*
const StepTracker = () => {
  const [number, setNumber] = useState(0);

  const clickHandler = () => {
    setNumber(prevState => prevState + 1)
  }

  return (
    <div>
      <p>You have pressed {number} number of times</p>
      <button onClick={clickHandler}>+</button>
    </div>
  )
}
*/

/* Todos
const Todos = ({ todos }) => {
  const [todo, setTodo] = useState("")
  const [todosArr, setTodosArr] = useState(todos);

  const changeHandler = (event) => {
    setTodo(event.target.value);
  }

  const clickHandler = (event) => {
    setTodosArr([...todosArr, todo]);
  }

  const removeHandler = (todo) => {
    setTodosArr(todosArr.filter(t => t !== todo))
  }

  return (
    <div>
      <ul>
        {todosArr.map((todo, idx) =>
          <li onClick={() => removeHandler(todo)} key={idx}>
            {todo}
          </li>)
        }
      </ul>
      <input type="text" value={todo} onChange={changeHandler}></input>
      <button onClick={clickHandler}>add todo</button>
    </div>
  )
}
*/

// TODO:
// 1. Input för namn; skriv ut i objekt
// 2. Input för ålder; skriv ut i objekt
// 3. Visa hur man lägger till fler operatorer i kalkylator

const Display = () => {
  const [obj, setObj] = useState({})

  const nameHandler = (event) => {
    setObj({ ...obj, name: event.target.value })
  }

  const ageHandler = (event) => {
    setObj({ ...obj, age: event.target.value })
  }

  return (
    <div>
      <p>{obj}</p>
      <input type="text" onChange={nameHandler} />
      <input type="number" onChange={ageHandler} min="1" max="100" />
    </div>
  )
}

function App() {
  return (
    <div>
      <Display />
    </div>
  );
}

export default App;

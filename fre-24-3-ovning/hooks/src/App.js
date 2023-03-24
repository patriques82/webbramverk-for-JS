import { useState } from "react";

/*
const useCounter = (init) => {
  const [count, setCount] = useState(init)
  const increase = () => {
    setCount(count + 1)
  }
  const decrease = () => {
    setCount(count - 1)
  }
  const zero = () => {
    setCount(init)
  }
  return {
    count,
    increase,
    decrease,
    zero
  }
}

function App() {
  const {count, increase, decrease, zero } = useCounter(0);

  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={zero}>0</button>
    </div>
  );
}

function App() {
  const left = useCounter(0);
  const right = useCounter(0);

  return (
    <div className="App">
      <div>{left.count}</div>
      <button onClick={left.increase}>increase left</button>
      <button onClick={right.increase}>increase right</button>
      <div>{right.count}</div>
    </div>
  );
}
*/

const useField = (type) => {
  const [value, setValue] = useState("")

  const onChange = e => setValue(e.target.value)

  return {
    type,
    value,
    onChange
  }
}

/*
// Version 1
const App = () => {
  const name = useField("text")
  const birthdate = useField("date")
  const height = useField("number")

  return (
    <div>
      <form>
        Name:
        <input type={name.type} value={name.value} onChange={name.onChange} />
        Birthdate:
        <input type={birthdate.type} value={birthdate.value} onChange={birthdate.onChange} />
        Height:
        <input type={height.type} value={height.value} onChange={height.onChange} />
      </form>

      <br />

      <div>
        <p>Name: {name.value}</p>
        <p>Birthdate: {birthdate.value}</p>
        <p>Height: {height.value}</p>
      </div>
    </div>
  )
}

*/

// Version 2
const App = () => {
  const name = useField("text")
  const birthdate = useField("date")
  const height = useField("number")

  return (
    <div>
      <form>
        Name:
        <input {...name} />
        Birthdate:
        <input {...birthdate} />
        Height:
        <input {...height} />
      </form>

      <br />

      <div>
        <p>Name: {name.value}</p>
        <p>Birthdate: {birthdate.value}</p>
        <p>Height: {height.value}</p>
      </div>
    </div>
  )
}

export default App;

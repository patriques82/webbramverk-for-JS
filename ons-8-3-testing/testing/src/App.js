import { useState } from "react";

/* props.children
const Parent = (props) => {
  return (
    <div className="parent">
      {props.children}
    </div>
  )
}

const Child = () => {
  return (
    <p>Hejsan</p>
  )
}
*/

// Parent
const Toggable = ({ children, hidden, shown }) => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? shown : hidden}
      </button>
      {visible ? children : ""}
    </div>
  )
}

const Text = () => {
  return (
    <div>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
    </div>
  )
}

const Form = () => {
  return (
    <form>
      <input type="text" />
      <button>Spara</button>
    </form>
  )
}

function App() {
  return (
    <Toggable hidden={"visa text"} shown={"dölj text"}>
      <Text />
      <Form />
    </Toggable>
  );
}

export default App;

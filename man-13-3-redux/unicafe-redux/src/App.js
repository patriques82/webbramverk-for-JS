import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const { good, ok, bad } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Good: {good}, Ok: {ok}, Bad: {bad} </p>
      <button onClick={() => dispatch({ type: "GOOD" })}>Good</button>
      <button onClick={() => dispatch({ type: "OK" })}>Ok</button>
      <button onClick={() => dispatch({ type: "BAD" })}>Bad</button>
    </div>
  )
}

export default App
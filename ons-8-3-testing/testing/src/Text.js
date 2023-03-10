const Text = ({ message, callback }) => {
  return (
    <div className="text">
      {message}
      <button onClick={callback}>Click me</button>
    </div>
  )
}

export default Text;
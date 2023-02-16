const Hello = (props) => {
  console.log(props);
  return (
    <div>Hello {props.first} {props.last}</div>
  )
}

export default Hello;
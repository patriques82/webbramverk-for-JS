const people = [
  { name: "Lars", age: 44 },
  { name: "Sandra", age: 12 },
  { name: "Cain", age: 3 },
]

const Person = (props) => {
  const { name, age } = props.person;
  return <li>{name} {age}</li>
}

const App = (props) => {
  return (
    <ul>
      {people.map(person => <Person person={person} />)}
    </ul>
  );
}

export default App;

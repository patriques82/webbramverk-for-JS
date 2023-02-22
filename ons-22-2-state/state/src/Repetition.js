const Hello = ({ name, age }) => {
  const birthYear = () => {
    return new Date().getFullYear() - age;
  }
  return (
    <>
      <p>{name} {age}</p>
      <p>So you are born in {birthYear()}</p>
    </>
  )
}

const App = () => {
  return (
    <div>
      <Hello name="Ulysses" age="43" />
    </div>
  );
}

export default App;

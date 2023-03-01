import React, { useState } from 'react';
import "./main.css";


//https://images.dog.ceo/breeds/briard/n02105251_3407.jpg
//https://images.dog.ceo/breeds/puggle/IMG_090821.jpg



/* Dogs example
const Dogs = ({ setView, dogs, setDog }) => {
  const viewDog = (dog) => {
    setDog(dog)
    setView("DOG")
  }

  return (
    <div>
      <h1>Dogs</h1>
      <ul>
        {dogs.map(dog =>
          <li>
            <img src={dog.img} />
            <p>Name: <a href="#" onClick={() => viewDog(dog)}>{dog.name}</a></p>
            <p>Age: {dog.age} </p>
          </li>
        )}
      </ul>
      <button onClick={() => setView("CREATE")}>Create</button>
    </div>
  )
}

const CreateDog = ({ setView, setDogs }) => {
  const submitHandler = (event) => {
    event.preventDefault();
    const img = event.target.img.value;
    const name = event.target.name.value;
    const age = event.target.age.value;
    setDogs(prev => [...prev, { img, name, age }]) // ny hund läggs till
    setView("DOGS") // byt vy till DOGS
  }

  return (
    <div>
      <h1>Create Dog</h1>
      <form onSubmit={submitHandler}>
        <input placeholder="image" id="img" type="text"></input>
        <input placeholder="name" id="name" type="text"></input>
        <input placeholder="age" id="age" type="number"></input>
        <button>Save</button>
      </form>
    </div>

  )
}

const Dog = ({ setView, dog }) => {
  return (
    <div>
      <h1>View Dog</h1>
      <img src={dog.img} />
      <p>name: {dog.name}</p>
      <p>age: {dog.age}</p>
      <button onClick={() => setView("DOGS")}>Home</button>
    </div>
  )
}

const App = () => {
  const [view, setView] = useState("DOGS")
  const [dogs, setDogs] = useState([]);
  const [dog, setDog] = useState({})

  switch (view) {
    case "DOGS":
      return <Dogs setView={setView} dogs={dogs} setDog={setDog} />
    case "DOG":
      return <Dog setView={setView} dog={dog} />
    default:
      return <CreateDog setView={setView} setDogs={setDogs} />
  }
}
*/


/* Form intro
function FormEx() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)

  const submitHandler = (event) => {
    event.preventDefault()
    setName(event.target.name.value)
    setAge(event.target.age.value)
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input id="name" type="text" />
        <input id="age" type="number" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
*/

export default App;

import React, { useState, useEffect } from 'react';
import "./main.css";

// Läxa till fredag
// 1. Gör post anrop istället för bara

const Notes = ({ notes, setView }) => {
  return (
    <div>
      <ul>
        {notes.map(note =>
          <li className={note.important ? "important" : ""}>
            {note.content}
          </li>
        )}
      </ul>
      <button onClick={() => setView("CREATE_NOTE")}>Add Note</button>
    </div>
  )
}

const CreateNote = ({ setView }) => {
  const submitHandler = async e => {
    e.preventDefault()
    const content = e.target.note.value // "buy milk"
    const important = e.target.important.checked // true/false
    try {
      await fetch("http://localhost:3001/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content, important })
      })
    } catch (error) {
      console.error(error);
    }
    setView("NOTES")
  }
  return (
    <form onSubmit={submitHandler}>
      <input id="note" type="text" placeholder="note"></input>
      <input id="important" type="checkbox" placeholder="note"></input>
      <button type="submit">Save</button>
    </form>
  )
}

// Container
const App = () => {
  const [view, setView] = useState("NOTES");
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const fetchNotes = async () => {
      const resp = await fetch("http://localhost:3001/notes");
      const json = await resp.json();
      setNotes(json);
    }
    fetchNotes();
  }) // Ta bort dependency array för att köra effekt efter varje render

  switch (view) {
    case "NOTES":
      return <Notes notes={notes} setView={setView} />
    default:
      return <CreateNote setView={setView} />
  }
}


/*
const App = () => {
  const [dogImg, setDogImg] = useState("")
  const [trigger, setTrigger] = useState(0);

  const fetchDog = async () => {
    const resp = await fetch("https://dog.ceo/api/breeds/image/random");
    const randomDog = await resp.json();
    setDogImg(randomDog.message)
  }

  useEffect(() => {
    console.log("effect") // Visas i effect
    fetchDog();
  }, [trigger]);

  console.log("render", dogImg) // Visas i render

  return (
    <div>
      <img src={dogImg} />
      <button onClick={() => setTrigger(trigger + 1)}>trigger</button>
    </div>
  )
}
*/

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

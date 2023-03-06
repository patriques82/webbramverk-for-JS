import { useEffect, useState } from "react";
import noteService from "./noteservice"

/*
// Teori useEffect
const App = ({ }) => {
  const [number, setNumber] = useState(0);
  const [dummy, setDummy] = useState(false);

  useEffect(() => {
    //setTimeout(() => setNumber(prev => prev + 1), 2000)
    const id = setTimeout(() => { console.log("effekt", id) }, 2000)
    return () => {
      console.log("cleanup", id)
      clearTimeout(id);
    }
  }, [dummy]);

  console.log("rerender")

  //1. Om vi vill att effekten ska köra vid varje rendering => ingen depency array
  //2. Om vi vill att effekten bara köra den första renderingen => tom dependency array
  //3. Om vi vill att effekten ska köra vid föränring av state, eller prop => [state, prop]

  //4. cleanup 

  return (
    <>
      <div>
        {number}
      </div>
      <button onClick={() => setDummy(!dummy)}>Trigger</button>
    </>
  )
}
*/


// Notes
const Notes = ({ notes, setNotes, setView }) => {
  const deleteHandler = async (id) => {
    try {
      await fetch(`http://localhost:8000/notes/${id}`, {
        method: "DELETE"
      });
    } catch (error) {
      console.error(error);
    }
    setNotes(notes.filter(n => n.id !== id))
  }
  return (
    <div>
      <ul>
        {notes.map(note =>
          <li onClick={() => deleteHandler(note.id)} className={note.important ? "important" : ""}>
            {note.content}
          </li>
        )}
      </ul>
      <button onClick={() => setView("CREATE_NOTE")}>Add Note</button>
    </div>
  )
}

const CreateNote = ({ setNotes, setView }) => {
  const submitHandler = async e => {
    e.preventDefault()
    const content = e.target.note.value // "buy milk"
    const important = e.target.important.checked // true/false
    try {
      await fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content, important })
      })
    } catch (error) {
      console.error(error);
    }
    setNotes(prev => [...prev, { content, important }])
    setView("NOTES")
  }
  return (
    <form onSubmit={submitHandler}>
      <input id="note" type="text" placeholder="note"></input>
      <input id="important" type="checkbox"></input>
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
      const resp = await fetch("http://localhost:8000/notes");
      const json = await resp.json();
      setNotes(json);
    }
    fetchNotes();
  }, [])

  switch (view) {
    case "NOTES":
      return <Notes setNotes={setNotes} notes={notes} setView={setView} />
    default:
      return <CreateNote setNotes={setNotes} setView={setView} />
  }
}


export default App;

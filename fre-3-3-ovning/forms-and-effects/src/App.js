import { useEffect, useState } from "react";

/* Teori useEffect
const App = () => {
  const [number, setNumber] = useState(0);
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setNumber(prev => prev + 1), 2000)
    console.log("")
    return () => {
      console.log("clean up", id);
      clearTimeout(id);
    }
  }, []);

  
  //1. ingen array => sker effekt vid varje rendering
  //2. tom array => sker effekt vid första rendering
  //3. element i array => sker effekt vid första rendering + när element förändras

  //4. clean up funktion returneras från callback
  

  return (
    <>
      <div>{number}</div>
      <button onClick={() => setTrigger(prev => !prev)}>Trigger</button>
    </>
  )
}

*/

// Notes
const Notes = ({ notes, setNotes, setView }) => {
  const deleteHandler = async (id) => {
    try {
      await fetch(`http://localhost:3001/notes/${id}`, {
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
    setNotes(prev => [...prev, { content, important }])
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
  }, [])

  switch (view) {
    case "NOTES":
      return <Notes setNotes={setNotes} notes={notes} setView={setView} />
    default:
      return <CreateNote setNotes={setNotes} setView={setView} />
  }
}


export default App;

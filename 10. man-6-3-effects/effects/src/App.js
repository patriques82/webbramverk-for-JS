import { useEffect, useState } from "react";
import noteService from "./noteservice"

/*
const App = () => {
  const [getTrigger, setGetTrigger] = useState({});
  const [postTrigger, setPostTrigger] = useState({});
  const [putTrigger, setPutTrigger] = useState({});
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchAllNotes = async () => {
      const notes = await noteService.getAllNotes();
      setNotes(notes);
    }
    fetchAllNotes();
  }, [postTrigger, getTrigger, putTrigger])

  useEffect(() => {
    const postNewNote = async () => {
      await noteService.createNote({ content: "tripptrapptrull", important: false })
    }
    postNewNote();
  }, [postTrigger])

  useEffect(() => {
    const editNote = async () => {
      await noteService.editNote(4, { content: "tripp", important: false })
    }
    editNote();
  }, [putTrigger]);

  return (
    <div>
      <button onClick={() => setGetTrigger({})}>GET</button>
      <button onClick={() => setPostTrigger({})}>POST</button>
      <button onClick={() => setPutTrigger({})}>PUT</button>
      <ul>
        {notes.map(note => <li>{note.content}</li>)}
      </ul>
    </div>
  )
}
*/

/*
// Bonus input/paragraf toggle
const EditInputToggle = () => {
  const [edit, setEdit] = useState(false)
  const [text, setText] = useState("");
  return (
    <Parent>
      {edit ?
        <input value={text} onChange={e => setText(e.target.value)}></input> :
        <p>{text}</p>
      }
      <button onClick={() => setEdit(prev => !prev)}>Edit</button>
    </Parent>
  )
}
*/

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
  const [editIds, setEditIds] = useState([]);

  const deleteHandler = async (id) => {
    try {
      await noteService.deleteNote(id)
    } catch (error) {
      console.error(error);
    }
    setNotes(notes.filter(n => n.id !== id))
  }

  const editHandler = async ({ id, ...note }) => {
    if (!editIds.includes(note.id)) {
      setEditIds(prev => [...prev, id]) // TODO: delete 
    } else {
      try {
        await noteService.editNote(id, note)
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <div>
      <ul>
        {notes.map(note =>
          <li key={note.id} className={note.important ? "important" : ""}>
            <input readOnly={!editIds.includes(note.id)} value={note.content} />
            <button onClick={() => deleteHandler(note.id)}>Delete</button>
            <button onClick={() => editHandler(note)}>{!editIds.includes(note.id) ? "Edit" : "Save"}</button>
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
    // add to server
    try {
      await noteService.createNote({ content, important })
    } catch (error) {
      console.error(error);
    }
    // add to state in react
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
      const notes = await noteService.getAllNotes();
      setNotes(notes);
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

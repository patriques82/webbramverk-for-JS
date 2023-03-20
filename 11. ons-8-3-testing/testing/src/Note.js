const Note = ({ note, toggleImportant }) => {
  const label = note.important ? "Unimportant" : "Important";
  return (
    <li>
      {note.content}
      <button onClick={toggleImportant}>{label}</button>
    </li>
  )
}

const Notes = ({ children }) => {
  return (
    <ul>
      {children}
    </ul>
  )
}



export { Note, Notes };
const baseUrl = "http://localhost:8000/notes"

const getAllNotes = async () => {
  const resp = await fetch(baseUrl);
  const json = await resp.json();
  return json
}

const createNote = async (note) => {
  await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note)
  })
}

const deleteNote = async (id) => {
  await fetch(`${baseUrl}/${id}`, {
    method: "DELETE"
  });
}

const editNote = async (id, note) => {
  await fetch(`${baseUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(note)
  })
}

export default {
  getAllNotes,
  createNote,
  deleteNote,
  editNote
}
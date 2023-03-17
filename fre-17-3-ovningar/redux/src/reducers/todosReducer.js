import uniqid from "uniqid";

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.payload) // payload == id
    case "TOGGLE_IMPORTANCE":
      return state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, important: !todo.important };
        } else {
          return todo;
        }
      })
    default:
      return state;
  }
}

// action creator "ADD_TODO"
export const createTodo = (content, important = false) => {
  return {
    type: "ADD_TODO",
    payload: { id: uniqid(), content, important }
  }
}

// action creator "REMOVE_TODO"
export const deleteTodo = id => {
  return {
    type: "REMOVE_TODO",
    payload: id
  }
}

export const toggleImportance = id => {
  return {
    type: "TOGGLE_IMPORTANCE",
    payload: id
  }
}

export default todosReducer;
import uniqid from "uniqid";

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload]
    default:
      return state;
  }
}

// action creator "ADD_TODO"
export const createTodo = (content, important = false) => {
  return { type: "ADD_TODO", payload: { id: uniqid(), content, important } }
}

export default todosReducer;
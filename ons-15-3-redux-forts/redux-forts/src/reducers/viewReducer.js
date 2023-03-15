// LIST_TODOS, CREATE_TODO, LIST_BOOKS, CREATE_BOOK
const viewReducer = (state = "LIST_TODOS", action) => {
  return action.type;
}

export const goToListTodos = () => {
  return { type: "LIST_TODOS" }
}

export const goToCreateTodo = () => {
  return { type: "CREATE_TODO" }
}

export const goToListBooks = () => {
  return { type: "LIST_BOOKS" }
}

export const goToCreateBook = () => {
  return { type: "CREATE_BOOK" }
}

export default viewReducer;
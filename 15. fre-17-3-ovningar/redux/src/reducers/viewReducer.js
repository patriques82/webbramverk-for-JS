// LIST_TODOS, CREATE_TODO, LIST_BOOKS, CREATE_BOOK
const viewReducer = (state = "LIST_TODOS", action) => {
  switch (action.type) {
    case "LIST_TODOS":
      return "LIST_TODOS";
    case "CREATE_TODO":
      return "CREATE_TODO";
    case "CREATE_BOOK":
      return "CREATE_BOOK";
    case "LIST_BOOKS":
      return "LIST_BOOKS";
    default:
      return state;
  }
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
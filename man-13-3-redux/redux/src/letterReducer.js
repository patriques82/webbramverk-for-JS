export const letterReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_A":
      return [...state, "A"]
    case "ADD_B":
      return [...state, "B"]
    case "ADD_C":
      return [...state, "C"]
    case "REMOVE_LAST":
      return state.slice(0, -1)
    case "REMOVE_FIRST":
      return state.slice(1)
    default:
      return state
  }
}
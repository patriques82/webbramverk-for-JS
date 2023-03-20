import { letterReducer } from "./letterReducer";

describe("letterReducer suite", () => {
  test("should add A to array given action 'ADD_A'", () => {
    const newState = letterReducer([], { type: "ADD_A" })
    expect(newState).toStrictEqual(["A"])
  })

  test("should remove last letter given action 'REMOVE_LAST'", () => {
    const newState = letterReducer(["A", "B", "C"], { type: "REMOVE_LAST" })
    expect(newState).toStrictEqual(["A", "B"])
  })
})
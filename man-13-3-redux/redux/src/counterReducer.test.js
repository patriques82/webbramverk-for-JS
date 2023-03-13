import { counterReducer } from './counterReducer'

describe("counterReducer suite", () => {
  test("INCREMENT action increments", () => {
    const oldState = 10
    const newState = counterReducer(oldState, { type: "INCREMENT" })
    expect(newState).toBe(11)
  })
})
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event';

import { Transparency } from './App';

describe("<Transparency /> suite", () => {
  const data = [
    { timepoint: 1, transparency: 1 },
    { timepoint: 2, transparency: 2 },
    { timepoint: 3, transparency: 3 },
  ]

  test("check that timepoint 2 has transparency 2", () => {
    render(<Transparency data={data} />)
    const timeElem = screen.getByText("Time: 2")
    const transElem = screen.getByText("Transparency: 2");
    expect(timeElem).toBeDefined();
    expect(transElem).toBeDefined();
  })

  test("check that function is called when button is clicked", async () => {
    const mockFn = jest.fn()

    render(<Transparency data={data} viewChange={mockFn} />)
    const user = userEvent.setup();

    const button = screen.findByText("Cloud cover")

    await user.click(button);
    expect(mockFn).toBeCalled()

  })

})
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event';

import { Note } from "../Note";

/* Exempel på test svit

describe('test suite for + ', () => {
  shouldBe('test 1', () => {
    expect(1 + 1).toBe(2);
  })

  test('test 2', () => {
    expect(1 + 3).toBe(5);
  })

  test('test 3', () => {
    expect(1 + 1).toBe(15);
  })
});

*/

describe('Note component', () => {
  test('renders correct text', () => {
    const note = {
      content: "Some text",
      important: false
    }
    render(<Note note={note} toggleImportant={() => { }} />)

    const elem = screen.getByText("Some text");
    // screen.debug(elem);
    expect(elem).toBeDefined();
  })

  test('unimportant note shows button with text "Important"', () => {
    const note = {
      content: "bla bla",
      important: false, // testa
    }
    const { container } = render(<Note note={note} toggleImportant={() => { }} />)
    //screen.debug()

    const button = container.querySelector('button');
    expect(button.textContent).toContain("Important");
  })

  test('important note shows button with text "Unimportant"', () => {
    const note = {
      content: "bla bla",
      important: true, // testa
    }
    const { container } = render(<Note note={note} toggleImportant={() => { }} />)
    //screen.debug()

    const button = container.querySelector('button');
    expect(button.textContent).toContain("Unimportant");
  })

  test('toggleImportant is clicked', async () => {
    const mockHandler = jest.fn()
    const note = {
      content: "bla bla",
      important: true, // testa
    }

    const { container } = render(<Note note={note} toggleImportant={mockHandler} />)
    const user = userEvent.setup();
    const button = container.querySelector('button');
    await user.click(button);

    expect(mockHandler.mock.calls).toHaveLength(1);
  })
})



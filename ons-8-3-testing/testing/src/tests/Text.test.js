import { render, screen } from '@testing-library/react';
import Text from "../Text"

describe('Text component', () => {
  test('it should show correct text', () => {
    render(<Text message={"hejsan"} />)

    const elem = screen.getByText("hejsan");
    expect(elem).toBeDefined();
  })

  test('it should have yellow background', () => {
    render(<Text message={"hejsan"} />)

    const elem = screen.getByText("hejsan");

    expect(elem).toHaveStyle('background-color: yellow')

  })
})
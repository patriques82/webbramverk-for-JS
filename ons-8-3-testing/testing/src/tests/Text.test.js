import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event';

import Text from "../Text"

describe('Text component', () => {
  test('it should show hejsan', () => {
    render(<Text message={"hejsan"} changeText={() => { }} />)

    const elem = screen.getByText("hejsan");
    expect(elem).toBeDefined();
  })

  test('it should show whaaat', () => {
    render(<Text message={"whaat"} changeText={() => { }} />)

    const elem = screen.getByText("whaat");
    expect(elem).toBeDefined();
  })

  test('it should have yellow background', () => {
    const { container } = render(<Text message={"hejsan"} changeText={() => { }} />)

    const elem = container.getElementsByClassName("text");
    expect(elem).toBeDefined();
  })

  test('it should call callback when clicked', async () => {
    const mockFunction = jest.fn();
    const { container } = render(<Text message={"hejsan"} callback={mockFunction} />)

    const button = container.querySelector('button');
    const user = userEvent.setup();
    await user.click(button);

    expect(mockFunction).toBeCalledTimes(1)
  })

})
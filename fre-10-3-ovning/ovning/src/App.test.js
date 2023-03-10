import { render, screen } from '@testing-library/react';
import App, { Wrapper } from './App';

/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

describe("<Wrapper /> suite", () => {
  test("it should show 'Weather appen'", () => {
    render(<Wrapper />)
    const h1 = screen.getByText("Weather appen");
    expect(h1).toBeDefined();
  })
})

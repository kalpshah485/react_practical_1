import { render, screen } from '@testing-library/react';
import App from './App';
describe('App testing', () => {

  beforeAll(() => {
    console.log("We are going to test App component with hello world text")
  });
  afterAll(() => {
    console.log("Test completed");
  });

  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/hello world/i);
    expect(linkElement).toBeInTheDocument();
  });
});

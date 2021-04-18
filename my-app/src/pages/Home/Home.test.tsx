import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home page', () => {
  // TODO: improve this test: understand it
  test('renders "My future site" text', () => {
    render(<Home />);
    const linkElement = screen.getByText(
      /It’s all about my passion to life, learning and personal growth/i
    );
    expect(linkElement).toBeInTheDocument();
  });
});

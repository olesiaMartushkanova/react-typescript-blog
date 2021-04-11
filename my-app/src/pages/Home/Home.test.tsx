import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home page', () => {
  test('renders "My future site" text', () => {
    render(<Home />);
    const linkElement = screen.getByText(/My future site site/i);
    expect(linkElement).toBeInTheDocument();
  });
});

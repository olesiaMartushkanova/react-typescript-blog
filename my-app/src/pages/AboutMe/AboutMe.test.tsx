import { render, screen } from '@testing-library/react';
import AboutMe from './AboutMe';

describe('About me page', () => {
  test('renders "My journey" text', () => {
    render(<AboutMe />);
    const linkElement = screen.getByText(/My journey/i);
    expect(linkElement).toBeInTheDocument();
  });
});

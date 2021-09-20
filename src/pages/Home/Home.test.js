import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Homepage correctly', () => {
  render(<Home />);
//   screen.debug();
  expect(screen.getByText('Show Map')).toBeInTheDocument();
})
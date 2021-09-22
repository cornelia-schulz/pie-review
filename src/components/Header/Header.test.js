import { fireEvent, render, screen } from '@testing-library/react';
import Header from './Header';

test('renders Header component', () => {
  render(<Header />);
  expect(screen.getByAltText('pie review logo')).toBeInTheDocument();
  // screen.debug();
  expect(screen.getByRole('textbox')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button'), {
    target: { value: 'JavaScript'}
  });

  fireEvent.change(screen.getByRole('textbox'), {
    target: { value: 'JavaScript'}
  })
  // screen.debug();
});

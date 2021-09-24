import { fireEvent, render, screen } from '@testing-library/react';
import Header from './Header';
import userEvent from '@testing-library/user-event';

test('renders Header component', () => {
  render(<Header />);
  expect(screen.getByAltText('pie review logo')).toBeInTheDocument();
  // screen.debug();
  expect(screen.getByRole('textbox')).toBeInTheDocument();
  expect(screen.getByRole('button', {name: 'search for location'})).toBeInTheDocument();
  userEvent.click(screen.getByRole('button'), 'JavaScript');
  // screen.debug();
});

test('calls onChange handler', () => {
  const location=""
  render(
    <Header />
  );
  userEvent.type(screen.getByRole('textbox', 'Sydney'));
  expect(location).toBe('Sydney')
});

test('calls onClick handler', () => {
  // const getLocation = jest.fn();
  render(
    <Header />
  );
  const button = screen.getByRole('button');
  userEvent.click(button);
  expect(button).toHaveFocus();
});

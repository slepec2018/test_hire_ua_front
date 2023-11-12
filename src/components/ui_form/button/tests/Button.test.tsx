import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

const testProps = {
  value: 'Submit',
  onClick: jest.fn(),
};

test('Button component renders correctly with the correct value', () => {
  render(<Button {...testProps} />);

  const buttonElement = screen.getByText(testProps.value);

  expect(buttonElement).toBeInTheDocument();
});

test('Clicking the button calls the onClick function', () => {
  render(<Button {...testProps} />);

  fireEvent.click(screen.getByText(testProps.value));

  expect(testProps.onClick).toHaveBeenCalled();
});

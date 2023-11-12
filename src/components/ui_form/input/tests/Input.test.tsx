import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Input from '../Input';

const testProps = {
  placeholder: 'Enter your name',
  value: 'John Doe',
  name: 'fullName',
  type: 'text',
  onChange: jest.fn(),
};

test('Input component renders correctly with the correct placeholder and value', () => {
  render(<Input {...testProps} />);

  const inputElement = screen.getByPlaceholderText(testProps.placeholder);

  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toHaveValue(testProps.value);
});

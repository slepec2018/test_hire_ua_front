import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Message from '../Message';

test('Message component renders correctly', () => {
  const testMessage = 'This is a test message';
  render(<Message message={testMessage} error={false} />);

  const messageElement = screen.getByText(testMessage);

  expect(messageElement).toBeInTheDocument();

  expect(messageElement).toHaveClass('max-w-sm font-sans font-light text-gray-600');
});

test('Error message has correct styling', () => {
  const errorMessage = 'This is an error message';
  render(<Message message={errorMessage} error={true} />);

  const errorMessageElement = screen.getByText(errorMessage);

  expect(errorMessageElement).toHaveClass('max-w-sm font-sans font-light text-red-600');
});

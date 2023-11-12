import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import FirstForm from '../FirstForm';

const mockChangeStep = jest.fn();
const mockChangeData = jest.fn();

const testProps = {
  changeStep: mockChangeStep,
  changeData: mockChangeData,
};

test('FirstForm component renders correctly', () => {
  render(<FirstForm {...testProps} />);

  expect(screen.getByPlaceholderText('Enter your first name')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Enter your last name')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Enter your email adress')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Enter your phone number')).toBeInTheDocument();
  expect(screen.getByText('Cancel')).toBeInTheDocument();
  expect(screen.getByText('Next')).toBeInTheDocument();
});

test('Submitting form calls changeData and changeStep with correct data', () => {
  render(<FirstForm {...testProps} />);

  fireEvent.change(screen.getByPlaceholderText('Enter your first name'), {
    target: { value: 'John' },
  });
  fireEvent.change(screen.getByPlaceholderText('Enter your last name'), {
    target: { value: 'Doe' },
  });
  fireEvent.change(screen.getByPlaceholderText('Enter your email adress'), {
    target: { value: 'john.doe@example.com' },
  });
  fireEvent.change(screen.getByPlaceholderText('Enter your phone number'), {
    target: { value: '123-456-7890' },
  });

  fireEvent.click(screen.getByText('Next'));

  expect(mockChangeData).toHaveBeenCalledWith({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
  });

  // Проверяем, что changeStep был вызван с 2
  expect(mockChangeStep).toHaveBeenCalledWith(2);
});

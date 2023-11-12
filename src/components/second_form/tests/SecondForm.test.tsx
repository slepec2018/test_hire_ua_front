import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import SecondForm from '../SecondForm';

test('SecondForm component renders correctly', () => {
  const changeStepMock = jest.fn();
  const changeDataMock = jest.fn();
  const submitMock = jest.fn();

  render(<SecondForm changeStep={changeStepMock} changeData={changeDataMock} submit={submitMock} />);

  const addressInput = screen.getByPlaceholderText('Enter your adress');
  const zipCodeInput = screen.getByPlaceholderText('Enter your zip code');
  const cancelButton = screen.getByText('Cancel');
  const submitButton = screen.getByText('Next');

  expect(addressInput).toBeInTheDocument();
  expect(zipCodeInput).toBeInTheDocument();
  expect(cancelButton).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});


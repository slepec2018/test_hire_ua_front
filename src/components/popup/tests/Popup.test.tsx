import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Popup from '../Popup';

test('Popup component renders children correctly', () => {
  const testChildText = 'This is a test child';
  render(<Popup><div>{testChildText}</div></Popup>);

  const childElement = screen.getByText(testChildText);

  expect(childElement).toBeInTheDocument();

  expect(screen.getByTestId('popup-container')).toContainElement(childElement);
});

import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Fotopresent from '../Fotopresent';

test('Fotopresent component renders correctly', () => {
  render(<Fotopresent />);

  const imageElement = screen.getByAltText('foto-present');

  expect(imageElement).toBeInTheDocument();

  expect(imageElement).toHaveClass('w-[430px] hidden md:block rounded-tr-2xl rounded-br-2xl');
});

test('Image source is generated correctly', () => {
  render(<Fotopresent />);

  const imageElement = screen.getByAltText('foto-present');

  expect(imageElement).toHaveAttribute('src', expect.stringMatching(/\/images\/[1-5].jpg/));
});

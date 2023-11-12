import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Steps from '../Steps';

const testProps = {
  step: 3,
};

test('Steps component renders correctly with the correct step number', () => {
  render(<Steps {...testProps} />);

  const stepElement = screen.getByText(`Step - ${testProps.step}`);

  expect(stepElement).toBeInTheDocument();
  expect(stepElement).toHaveClass('font-mono');
});

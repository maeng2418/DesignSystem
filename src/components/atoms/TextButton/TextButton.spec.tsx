import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import TextButton from './TextButton';

describe('<TextButton />', () => {
  it('matches snapshot', () => {
    const { container } = render(<TextButton />);
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(<TextButton />);
    getByText('');
  });
});

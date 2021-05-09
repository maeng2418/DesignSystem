import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Title from './Title';

describe('<Title />', () => {
  it('matches snapshot', () => {
    const { container } = render(<Title />);
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(<Title />);
    getByText('');
  });
});

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import BottomButton from './BottomButton';

describe('<BottomButton />', () => {
  it('matches snapshot', () => {
    const { container } = render(<BottomButton />);
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(<BottomButton />);
    getByText('');
  });
});

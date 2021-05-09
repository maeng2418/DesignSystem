import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import PopupHeader from './PopupHeader';

describe('<PopupHeader />', () => {
  it('matches snapshot', () => {
    const { container } = render(<PopupHeader title="test" />);
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(<PopupHeader title="text" />);
    getByText('');
  });
});

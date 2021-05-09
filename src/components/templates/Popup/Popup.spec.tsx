import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Popup from './Popup';

describe('<BottomButton />', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <Popup title={'테스트'} visible={true}>
        테스트
      </Popup>
    );
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(
      <Popup title={'테스트'} visible={true}>
        테스트
      </Popup>
    );
    getByText('');
  });
});

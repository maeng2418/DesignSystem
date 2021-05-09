import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import Popup from './Popup';
import { IPopupProps } from 'template-props';

export default {
  title: 'Popup',
  component: Popup,
} as Meta;

const Template: Story<IPopupProps> = (args) => <Popup {...args} />;

export const Popup_01 = Template.bind({});
Popup_01.args = {
  // props를 넣어주세요.
};

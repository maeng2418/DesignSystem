import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
// import { action } from '@storybook/addon-actions';
import PopupHeader from './PopupHeader';
import { IPopupHeaderProps } from 'module-props';

export default {
  title: 'PopupHeader',
  component: PopupHeader,
} as Meta;

const Template: Story<IPopupHeaderProps> = (args) => <PopupHeader {...args} />;

export const PopupHeader_01 = Template.bind({});
PopupHeader_01.args = {
  // props를 넣어주세요.
};

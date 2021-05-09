import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
// import { action } from '@storybook/addon-actions';
import BottomButton from './BottomButton';
import { IBottomButtonProps } from 'module-props';

export default {
  title: 'BottomButton',
  component: BottomButton,
} as Meta;

const Template: Story<IBottomButtonProps> = (args) => <BottomButton {...args} />;

export const BottomButton_01 = Template.bind({});
BottomButton_01.args = {
  // props를 넣어주세요.
};

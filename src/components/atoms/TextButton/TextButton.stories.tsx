import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import TextButton from './TextButton';
import { ITextButtonProps } from 'atom-props';

export default {
  title: 'TextButton',
  component: TextButton,
} as Meta;

const Template: Story<ITextButtonProps> = (args) => <TextButton {...args} />;

export const TextButton_01 = Template.bind({});
TextButton_01.args = {
  // props를 넣어주세요.c
};

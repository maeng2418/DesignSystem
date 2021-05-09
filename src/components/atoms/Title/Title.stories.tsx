import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import Title from './Title';
import { ITitleProps } from 'atom-props';

export default {
  title: 'Title',
  component: Title,
} as Meta;

const Template: Story<ITitleProps> = (args) => <Title {...args} />;

export const Title_01 = Template.bind({});
Title_01.args = {
  // props를 넣어주세요.c
};

import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import Icon from './index';
import { IIconButtonProps } from 'atom-props';

export default {
  title: 'ArrowDownDarkWhiteDefault',
  component: Icon.ArrowDownDarkWhiteDefault,
} as Meta;

const ArrowDownDarkWhiteDefaultTemplate: Story<IIconButtonProps> = (args) => (
  <Icon.ArrowDownDarkWhiteDefault {...args} />
);

export const ArrowDownDarkWhiteDefault_01 = ArrowDownDarkWhiteDefaultTemplate.bind({});
ArrowDownDarkWhiteDefault_01.args = {
  // props를 넣어주세요.
};

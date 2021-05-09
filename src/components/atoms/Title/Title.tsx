import React from 'react';
import * as S from './TitleStyles';
import { ITitleProps } from 'atom-props';

const Title: React.FC<ITitleProps> = ({ size = 'middle', title = '' }) => {
  return <S.Title size={size}>{title}</S.Title>;
};

export default Title;

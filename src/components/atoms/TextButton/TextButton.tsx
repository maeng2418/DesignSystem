import React from 'react';
import * as S from './TextButtonStyles';
import { ITextButtonProps } from 'atom-props';

const TextButton: React.FC<ITextButtonProps> = ({
  size = 'middle',
  onClick,
  children,
  disabled = false,
}) => {
  return (
    <S.TextButton size={size} disabled={disabled} onClick={onClick}>
      {children}
    </S.TextButton>
  );
};

export default TextButton;

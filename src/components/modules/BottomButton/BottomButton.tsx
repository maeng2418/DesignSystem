import React from 'react';
import * as S from './BottomButtonStyles';
import { IBottomButtonProps } from 'module-props';
import { TextButton } from 'components';

const BottomButton: React.FC<IBottomButtonProps> = ({
  cancelButton,
  confirmButton,
  children,
  onClick,
}) => {
  return (
    <S.BottomButton onClick={onClick}>
      {children}
      {cancelButton && <TextButton onClick={cancelButton.onClick}>{cancelButton.text}</TextButton>}
      {confirmButton && (
        <TextButton onClick={confirmButton.onClick}>{confirmButton.text}</TextButton>
      )}
    </S.BottomButton>
  );
};

export default BottomButton;

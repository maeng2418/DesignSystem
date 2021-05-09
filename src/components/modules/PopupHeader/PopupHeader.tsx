import React from 'react';
import * as S from './PopupHeaderStyles';
import { IPopupHeaderProps } from 'module-props';
import { Title, Icon } from 'components';

const PopupHeader: React.FC<IPopupHeaderProps> = ({ title = '', closeButton }) => {
  return (
    <S.PopupHeader>
      <Title title={title} size={'small'} />
      {closeButton && <Icon.CloseDarkGray500Default onClick={() => closeButton()} />}
    </S.PopupHeader>
  );
};

export default PopupHeader;

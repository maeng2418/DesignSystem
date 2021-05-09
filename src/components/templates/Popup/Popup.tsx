import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import * as S from './PopupStyles';
import { IPopupProps } from 'template-props';
import { PopupHeader } from 'components';
import { BottomButton } from 'components';

const Popup: React.FC<IPopupProps> = ({
  visible = false,
  title,
  closeButton,
  backgroundClick,
  cancelButton,
  confirmButton,
  selector,
  children,
}) => {
  const ref = useRef<any>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector || 'body');
    setMounted(true);
  }, [selector]);

  return mounted && visible
    ? createPortal(
        <S.Popup>
          <S.PopupContainer>
            <PopupHeader title={title} closeButton={closeButton} />
            <S.PopupContent>{children}</S.PopupContent>
            <BottomButton cancelButton={cancelButton} confirmButton={confirmButton} />
          </S.PopupContainer>
          <S.PopupBackground onClick={backgroundClick} />
        </S.Popup>,
        ref.current
      )
    : null;
};

export default Popup;

import React, { useState, useEffect } from 'react';
import { Popup, TextButton } from 'components';

const MainPage: React.FC = () => {
  const [visiblePopup, setVisiblePopup] = useState(false);
  const onShowPopup = () => {
    setVisiblePopup(true);
  };
  const onClosePopup = () => {
    setVisiblePopup(false);
  };

  const onClickCancelButton = () => {
    setVisiblePopup(false);
  };

  const onClickConfirmButton = () => {
    alert('확인');
  };

  useEffect(() => {
    console.log(visiblePopup);
  }, [visiblePopup]);
  return (
    <div>
      <TextButton size={'small'} onClick={onShowPopup}>
        클릭하시면 팝업이 열립니다.
      </TextButton>
      <Popup
        visible={visiblePopup}
        title={'테스트 팝업'}
        cancelButton={{ text: '취소', onClick: onClickCancelButton }}
        confirmButton={{ text: '확인', onClick: onClickConfirmButton }}
        closeButton={onClosePopup}
        backgroundClick={onClosePopup}
      >
        테스트 팝업 입니다.
      </Popup>
    </div>
  );
};

export default MainPage;

import React from 'react';

const ButtonBigRed = ({ buttonName, onClickConfirmed }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className='btn-big' onClick={onClickConfirmed}>
        {buttonName}
      </div>
    </div>
  );
};

export default ButtonBigRed;

import React from 'react';

const ButtonSmallRed = ({ buttonName, onClickConfirmed }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className='btn-small' onClick={onClickConfirmed}>
        {buttonName}
      </div>
    </div>
  );
};

export default ButtonSmallRed;

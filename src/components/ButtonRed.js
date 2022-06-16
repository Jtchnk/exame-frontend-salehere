import React from 'react';

const ButtonRed = ({ buttonName, onClickConfirmed }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          backgroundImage:
            'radial-gradient(ellipse farthest-corner at top left, #c41417 0%, #b31315 100%)',
          color: '#ffffff',
          borderRadius: '10px',
          padding: '12px 42px',
          fontSize: '24px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
        onClick={onClickConfirmed}
      >
        {buttonName}
      </div>
    </div>
  );
};

export default ButtonRed;

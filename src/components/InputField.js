import React from 'react';

const InputField = ({ value, inputOnChange }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <input
        style={{
          height: '60px',
          color: '#4e4e4e',
          border: '3px solid lightgray',
          borderRadius: '10px',
          fontSize: '34px',
          width: '70%',
          textAlign: 'center',
          margin: '36px 0',
        }}
        type='text'
        value={value}
        onChange={inputOnChange}
      />
    </div>
  );
};

export default InputField;

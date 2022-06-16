import React from 'react';
import Button from '../components/ButtonRed';
import InputField from '../components/InputField';

const SelectRoom = () => {
  return (
    <div>
      <div className='Title'>Meen</div>
      <div>
        <InputField />
        <Button buttonName='OK' />
      </div>
    </div>
  );
};

export default SelectRoom;

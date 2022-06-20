import React from 'react';
import ButtonSmallRed from '../components/ButtonSmallRed';
import InputField from '../components/InputField';

const SelectRoom = () => {
  return (
    <div>
      <div className='Title'>Meen</div>
      <div>
        <InputField />
        <ButtonSmallRed buttonName='OK' />
      </div>
    </div>
  );
};

export default SelectRoom;

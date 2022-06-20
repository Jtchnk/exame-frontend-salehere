import React, { useState } from 'react';
import Button from '../components/ButtonRed';
import InputField from '../components/InputField';
import Home from './Home';
import SelectRoom from './SelectRoom';

const Proxumer = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  // const [pageName, setPageName] = useState('Home');

  const onChangePage = () => {
    return <SelectRoom />;
    // setPageName('selectRoom');
  };

  return (
    <div>
      <Home onClickConfirmed={onChangePage} />
      {/* {!isConfirmed ? (
        <Home
          onClickConfirmed={() => {
            setIsConfirmed(true);
          }}
        />
      ) : (
        <SelectRoom />
      )} */}
    </div>
  );
};

export default Proxumer;

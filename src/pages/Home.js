import React, { useState } from 'react';
import Button from '../components/ButtonRed';
import InputField from '../components/InputField';
import SelectRoom from './SelectRoom';

const Home = () => {
  const [changeComp, setChangeComp] = useState(false);
  const aaa = () => {
    return (
      <div>
        <div
          style={{
            fontSize: '37px',
            color: '#383838',
            textAlign: 'center',
            fontWeight: 'bold',
            padding: '64px 0 0 0',
          }}
        >
          ชื่อของคุณ
        </div>
        <div>
          <InputField />
          <Button
            buttonName='ยืนยัน'
            onClickConfirmed={() => setChangeComp(true)}
          />
        </div>
      </div>
    );
  };

  const bbb = () => {
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

  return <div>{changeComp ? bbb() : aaa()}</div>;
};

export default Home;

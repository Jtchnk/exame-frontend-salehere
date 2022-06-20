import React, { useState } from 'react';
import ButtonBigRed from '../components/ButtonBigRed';
import ButtonSmallRed from '../components/ButtonSmallRed';
import InputField from '../components/InputField';
import SelectRoom from './SelectRoom';

const Home = () => {
  const [changeComp, setChangeComp] = useState('');
  const [name, setName] = useState('');
  const aaa = () => {
    return (
      <div>
        <div className='title'>ชื่อของคุณ</div>
        <div>
          <InputField
            value={name}
            inputOnChange={(e) => setName(e.target.value)}
          />
          {name && (
            <div className='slide-up'>
              <ButtonSmallRed
                buttonName='ยืนยัน'
                onClickConfirmed={() => setChangeComp('confirmed')}
              />
            </div>
          )}
        </div>
      </div>
    );
  };

  const bbb = () => {
    return (
      <div className='slide-up'>
        <div className='title-name'>คุณ Meen</div>
        <div>
          <ButtonBigRed
            buttonName='สร้างห้องใหม่'
            onClickConfirmed={() => setChangeComp('createRoom')}
          />
        </div>
      </div>
    );
  };

  const ccc = () => {
    return (
      <div className='slide-up'>
        <div className='title'>สร้างห้องใหม่</div>
        <div>
          <InputField
            value={name}
            inputOnChange={(e) => setName(e.target.value)}
          />
          {name && (
            <div className='slide-up'>
              <ButtonSmallRed
                buttonName='ยืนยัน'
                onClickConfirmed={() => setChangeComp('confirmed')}
              />
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      {changeComp === 'confirmed'
        ? bbb()
        : changeComp === 'createRoom'
        ? ccc()
        : aaa()}
    </div>
  );
};

export default Home;

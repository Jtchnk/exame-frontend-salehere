import React from 'react';
import bg from './assets/images/bg.jpg';
import logo from './assets/images/logo.png';
import Home from './pages/Home';

const App = () => {
  return (
    <div
      style={{ positon: 'relative', display: 'flex', justifyContent: 'center' }}
    >
      <img src={bg} alt='bg' />
      <div style={{ position: 'absolute', top: '10px' }}>
        <img src={logo} alt='logo' width='200' />
      </div>
      <div
        style={{
          position: 'absolute',
          background: 'white',
          borderRadius: '20px',
          height: '90vh',
          width: '90%',
          maxWidth: '1280px',
          top: '70px',
        }}
      >
        <Home />
      </div>
    </div>
  );
};

export default App;

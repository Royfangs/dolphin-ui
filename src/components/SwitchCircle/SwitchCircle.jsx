import React, { useState } from 'react';

import { CircleOne, CircleTwo } from './styled';

const wrapperStyle = {
  height: '500px',
  width: '500px',
  position: 'relative',
};

const styleOne = {
  height: '300px',
  width: '300px',
  bottom: 0,
  top: '100%',
  right: '100%',
  transform: 'translate(100%, -100%)',
  opacity: 1,
};

const styleTwo = {
  height: '150px',
  width: '150px',
  left: '100%',
  bottom: '100%',
  transform: 'translate(-100%, 100%)',
  opacity: 0.3,
};

const SwitchCircle = () => {
  const [switchCircle, setSwitchCircle] = useState(false);

  const handleClick = () => {
    setSwitchCircle((prevState) => !prevState);
  };

  return (
    <div style={wrapperStyle}>
      <CircleOne
        src={'https://picsum.photos/id/10/300/300'}
        isSwitched={switchCircle}
        styles={styleTwo}
        onClick={handleClick}
      />
      <CircleTwo
        src={'https://picsum.photos/id/20/300/300'}
        isSwitched={switchCircle}
        styles={styleOne}
        onClick={handleClick}
      />
    </div>
  );
};

export default SwitchCircle;

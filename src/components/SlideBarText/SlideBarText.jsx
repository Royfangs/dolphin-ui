import React from 'react';

import { SlideBar } from './styled';

const SlideBarText = ({ textColor = '#222', barColor = '#35b9f1', text }) => {
  return (
    <SlideBar
      textColor={textColor}
      barColor={barColor}
      as='span'
      key={`${textColor}-${barColor}-${text}`}
    >
      {text}
    </SlideBar>
  );
};

export default SlideBarText;

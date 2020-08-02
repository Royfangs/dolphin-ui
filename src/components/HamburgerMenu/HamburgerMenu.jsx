import React, { useState } from 'react';

import { MenuContainer, MenuBar } from './styled';

const HamburgerMenu = ({ barColor = '#222', callback }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const handleClick = () => {
    setIsMenuToggled((prevToggleState) => !prevToggleState);
    callback && callback();
  };

  return (
    <MenuContainer isMenuToggled={isMenuToggled} onClick={handleClick}>
      <MenuBar barColor={barColor} />
    </MenuContainer>
  );
};

export default HamburgerMenu;

import React, { useState } from 'react';

import { ExpandedIcon, Content, Title } from './styled';

const Expandable = ({ title, content }) => {
  const [isExpandable, setIsExpandable] = useState(false);

  const handleClick = () => {
    setIsExpandable((prevState) => !prevState);
  };

  return (
    <div>
      <Title onClick={handleClick}>
        <div>{title}</div>
        <ExpandedIcon isExpandable={isExpandable} />
      </Title>
      <Content isExpandable={isExpandable}>{content}</Content>
    </div>
  );
};

export default Expandable;

import React from 'react';

const Button = ({ disabled, children }) => {
  return <button disabled={disabled}>{children}</button>;
};

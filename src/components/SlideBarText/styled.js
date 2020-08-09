import styled, { keyframes } from 'styled-components';

const slideInOut = keyframes`
  50% {
    transform: scaleX(1);
    transform-origin: left;
  }

  50.1% {
    transform-origin: right;
  }

  100% {
    transform: scaleX(0);
    transform-origin: right;
  }
`;

const showTextColor = (textColor) => keyframes`
  to {
    color: ${textColor};
  }
`;

export const SlideBar = styled.div`
  position: relative;
  color: transparent;
  animation: ${({ textColor }) => showTextColor(textColor)} 2s 1.6s forwards;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ barColor }) => barColor};
    transform: scaleX(0);
    transform-origin: left;
    animation: ${slideInOut} 2s cubic-bezier(0.75, 0, 0, 1) forwards;
  }
`;

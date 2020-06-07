import styled, { keyframes } from 'styled-components';

const charging = keyframes`
  	50% {
        box-shadow: 0 14px 28px rgba(0, 150, 136, 0.83), 0px 4px 10px rgba(9, 188, 215, 0.4);
    }
    
    95% {
        top: 5%;
        border-radius: 0 0 5px 5px;
        box-shadow: 0 14px 28px rgba(4, 188, 213, .2), 0 10px 10px rgba(9, 188, 215, 0.08);
    }
    100% {
        top: 0%;
        border-radius: 15px 15px 5px 5px;
        box-shadow: 0 14px 28px rgba(4, 188, 213, 0), 0 10px 10px rgba(9, 188, 215, 0.4);
    }
`;

const moving = keyframes`
      100% {
        transform: translate(-50%, -160px) rotate(720deg);
    }
`;

export const Container = styled.div`
  position: relative;
  width: 140px;
  margin: auto;
`;

export const Header = styled.div`
  position: absolute;
  width: 26px;
  height: 10px;
  left: 50%;
  top: 0;
  transform: translate(-50%, -10px);
  border-radius: 5px 5px 0 0;
`;

export const WaveContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  border-radius: 15px 15px 5px 5px;
  overflow: hidden;
`;

export const BatteryBody = styled.div`
  position: relative;
  height: ${({ height }) => height};
  box-sizing: border-box;
  border-radius: 15px 15px 5px 5px;
  box-shadow: 0 0 5px 2px rgba(255, 255, 255, 0.22);
  background-color: #e4e4e4;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 80%;
    background: linear-gradient(
      to bottom,
      #66ff66 0%,
      #78db57 50%,
      #ff3300 100%
    );
    box-shadow: 0 14px 28px rgba(33, 150, 243, 0),
      0 10px 10px rgba(9, 188, 215, 0.08);
    animation: ${charging} 10s linear infinite;
  }
`;

export const Wave = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 45% 47% 44% 42%;
  bottom: 25px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 1;
  animation: ${moving} 10s linear infinite;

  &:nth-child(2) {
    border-radius: 38% 46% 43% 47%;
    transform: translate(-50%, 0) rotate(-135deg);
  }

  &:nth-child(3) {
    border-radius: 42% 46% 37% 40%;
    transform: translate(-50%, 0) rotate(135deg);
  }
`;

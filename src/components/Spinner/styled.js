import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  border: ${({ borderWidth, borderColor }) =>
    `${borderWidth} solid ${borderColor}`};
  border-top: ${({ borderWidth, circleColor }) =>
    `${borderWidth} solid ${circleColor}`};
  border-radius: 50%;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  animation: ${spin} 2s linear infinite;
`;

import styled, { keyframes, css } from 'styled-components';

const wave = keyframes`
  50%,
  75% {
    transform: scale(3.5);
  }

  80%,
  100% {
    opacity: 0;
  }
`;

export const Container = styled.div`
  width: ${({ containerWidth }) => containerWidth};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Dot = styled.div`
  position: relative;
  width: ${({ dotWidth }) => dotWidth};
  height: ${({ dotHeight }) => dotHeight};
  margin: 5px;
  border-radius: 50%;
  background-color: ${({ color }) => color};

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: inherit;
    animation: ${wave} 2s ease-out infinite;
  }

  ${({ dotIndex }) => {
    const delay = `${dotIndex * 0.2}s`;

    return css`
      &:nth-child(${dotIndex}) {
        &::before {
          animation-delay: ${delay};
        }
      }
    `;
  }}
`;

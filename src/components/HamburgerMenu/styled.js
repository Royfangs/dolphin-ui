import styled, { css } from 'styled-components';

const menuTransform = () => {
  return css`
    & > :first-child {
      transform: translate3d(0, 10px, 0) rotate(45deg);
    }

    & ::before {
      transform: rotate(-45deg) translate3d(-5.7px, -6px, 0);
      opacity: 0;
    }

    & ::after {
      transform: translate3d(0, -20px, 0) rotate(-90deg);
    }
  `;
};

const menuBarBasic = (barColor) => {
  return css`
    border-radius: 4px;
    background-color: ${barColor};
    width: 100%;
    height: 4px;
    transition: all 0.2s ease;
  `;
};

export const MenuContainer = styled.div`
  width: 40px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  ${({ isMenuToggled }) => {
    return isMenuToggled && menuTransform();
  }}
`;

export const MenuBar = styled.div`
  ${({ barColor }) => {
    return css`
      ${menuBarBasic(barColor)}

      &::before {
        content: '';
        top: 10px;
        position: absolute;
        ${menuBarBasic(barColor)}
      }

      &::after {
        content: '';
        top: 20px;
        position: absolute;
        ${menuBarBasic(barColor)}
      }
    `;
  }}
`;

import styled from 'styled-components';

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const ExpandedIcon = styled.div`
  position: relative;
  height: 100%;
  width: 30px;
  align-self: center;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 3px;
    background-color: #79dee3;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 3px;
    background-color: #79dee3;
    transition: transform 0.3s ease-in-out;
    transform: ${({ isExpandable }) =>
      isExpandable ? 'rotate(0deg)' : 'rotate(90deg)'};
  }
`;

export const Content = styled.div`
  padding: 10px 0px;
  transform: ${({ isExpandable }) =>
    isExpandable ? 'scaleY(1)' : 'scaleY(0)'};
  overflow: hidden;
  transform-origin: top;
  transition: all 0.3s ease-in-out;
`;

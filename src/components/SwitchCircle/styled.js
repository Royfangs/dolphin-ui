import styled from 'styled-components';

const Circle = styled.img`
  position: absolute;
  bottom: 0;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
`;

export const CircleOne = styled(Circle).attrs(({ isSwitched, styles }) => ({
  style: isSwitched ? styles : null,
}))`
  height: 300px;
  width: 300px;
  bottom: 0;
  left: 0;
  transition: all 0.5s ease-in-out;
`;

export const CircleTwo = styled(Circle).attrs(({ isSwitched, styles }) => ({
  style: isSwitched ? styles : null,
}))`
  height: 150px;
  width: 150px;
  right: 0;
  top: 0;
  opacity: 0.3;
  transition: all 0.4s ease-in-out;
`;

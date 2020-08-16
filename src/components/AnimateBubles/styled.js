import styled from 'styled-components';

export const AnimateBubblesContainer = styled.div`
  display: flex;
`;

export const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 3px;
  background-color: #3c76a9;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease-out;

  &:active,
  &:focus {
    outline-width: 0;
  }

  &:hover {
    background-color: #2d5a82;
  }
`;

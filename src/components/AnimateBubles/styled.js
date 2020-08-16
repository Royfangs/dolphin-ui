import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;

  & > button {
    margin-top: 2%;
  }
`;

export const AnimateBubblesContainer = styled.div`
  display: flex;
`;

export const Button = styled.button`
  width: 200px;
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

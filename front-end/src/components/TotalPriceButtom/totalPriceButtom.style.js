import styled from 'styled-components';

export const Button = styled.button`
  /* position: fixed; */
  opacity: 95%;
  background-color: #036B52;
  color: #fff;
  font-weight: 800;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;

  transition: all 0.3s;
  &:hover {
    font-size: 130%;
    background-color: #036B52;
    opacity: 100;

  }

  &:disabled {
    background-color: #c0c0c0;
    cursor: not-allowed;
  }
`;

export const CartButtonWrapper = styled.div`
    position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;

`;

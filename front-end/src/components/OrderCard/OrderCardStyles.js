import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  
  margin-bottom: 16px;
`;

export const OrderId = styled.span`
  font-weight: bold;
  margin-left: 5px;
`;

export const Status = styled.span`
  background-color: #4caf50;
  color: #fff;
  padding: 5px 10px;
  border-radius: 20px;
`;

export const SaleDate = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

export const Price = styled.span`
  font-weight: bold;
  font-size: 1.25rem;
`;

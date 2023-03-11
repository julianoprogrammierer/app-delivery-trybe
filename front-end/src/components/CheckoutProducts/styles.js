import styled from 'styled-components';

const CheckoutContainer = styled.div`
  width: 100vw;
  padding: 100px 60px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  border: 1px solid black;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid green;

  .shipped-box {
    padding: 8px 20px;
    box-sizing: content-box;
    margin-top: 20px;
    /* background-color: green; */
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2);

  }
  
  .checkout-screen {
    font-size: 1.5rem;
  }

  .main-container {
    width: 80%;
    max-height: 40vh;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    /* border: 4px solid grey; */
    overflow: scroll;
    
  }
  .head-container {
    padding-top: 0;
  }
  
  .head-container {
    display: flex;
    justify-content: space-between;
    padding: 0px 20px;
    margin-bottom: 20px;
  }
  p {
    display:flex;
    font-size: clamp(0.8em, 1em , 1.2em);
    align-items: center;
    align-self: center;
    justify-content: center;
    height: 32px;
    min-width: 50px;
  }
  
  .info-products {
    display: flex;
    height: 32px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    margin-bottom: 5px;
  }

  .description {
    width: 100%;
    min-width: 40%;
    max-width: 51.8%;

  }
  .description-name {
    background-color: #EAF1EF;
    width: 110%;
    min-width: 40%;
    max-width: 52%;

  }
  
  .item .item-list{
    min-width: 5%;
  }
  .item-list {
    background-color: #2FC18C;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;

  }

  .quantity {
    min-width: 112px;

  }
  .quantity-list {
    min-width: 112px;
    background-color: #036B52;
    color: white;

  }
  .price-table {
    font-size: 1em;
  }
  .price-list {
    min-width: 112px;
    background-color: #421981;
    color: white;

  }
  .subtotal {
    min-width: 112px;
  }

  .subtotal-table {      
    color: white;
    background-color: #056CF9;
  }

  .remove-item {
    min-width: 112px;

  }

  button {
    background-color: #2FC18C;
    color: white;
    font-size: 1.2em;
    min-width: 112px;
    height: 32px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border: none

  }

  .products-total-component {
    border: 1px solid red;
    width: 350px;
    height: 6rem;
    /* margin-left: 80%; */
    margin-top: 1.5rem;

  }

  @media (max-width: 768px) {
    .price-table {
    color: green;
    min-width: 3rem;
    font-size: 0.5em;
  }
  }

`;

export default CheckoutContainer;

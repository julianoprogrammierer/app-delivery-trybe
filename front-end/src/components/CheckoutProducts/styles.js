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

  
  .checkout-screen {
    font-size: 1.5rem;
  }

  .main-container {
    width: 80%;
    height: 40vh;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    /* border: 4px solid grey; */

  }
  
  ol {
    display: flex;
    justify-content: space-between;
    padding: 0px 20px;
    margin-bottom: 20px;
  }
  p {
    display:flex;
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
    margin: 0;
  }

  .description {
    min-width: 112px;

  }
  
  .item {

    background-color: grey;

  }

  .quantity {
    min-width: 112px;

  }

  button {
    min-width: 112px;
    height: 32px;

  }

  .products-total-component {
    border: 1px solid red;
    width: 20%;
    margin-left: 80%;
    margin-top: 10%;

  }

 

`;

export default CheckoutContainer;

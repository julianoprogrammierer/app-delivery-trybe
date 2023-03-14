import styled from 'styled-components';

const ProductsTotalStyled = styled.div`

text-align: center;
font-size: 1.5rem;
width: auto;
min-width: 250px;
height: auto;

p {
  display: flex;
  align-items: center;  
  font-size: 2rem;
  height: auto;
  width: auto;
  border-radius: 4px;
  color: white;
  background: #036B52;
}


.cents {  
  align-self: flex-start;
  margin-left: 1%;
}

.price {
  display: flex;
  position: relative;
  font-size: 30px;
  width: 30p;
  margin-left: 2%;
  
  span {
  display: flex;
  justify-content: end;
  }
}
.valor-symbol {
  align-self: baseline;
  font-size: 20px;
  margin-right: -1rem;
  padding: 0;
  width: 0;
}
`;

export default ProductsTotalStyled;

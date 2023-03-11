import styled from 'styled-components';

const DetailsAndAdress = styled.div`
margin: 50px;
margin-top: 10px;

.title {
  font-size: 1.6em;
  display: flex;
  justify-content: center;
}
input, select {
  margin: 10px;
  font-size: 1.3rem;
}
select {
  margin: 10px;
  font-size: 1rem;
}
.label-number {
  margin-left: 2em;
}
.input-adress {
  /* margin-left: 2em; */
  width: auto;
  min-width: 23vw;
}
.input-number {
  /* margin-left: 2em; */
  width: 100px;
}
label {
  font-size: 1em;
}
.main-button {  
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  button {
    margin-top: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: #036B52;
    color: white;
    padding: 23px;
    font-size: 1.5rem;
  }
}

`;

export default DetailsAndAdress;

import React from 'react';
import styled from 'styled-components'

const Button = styled.div`
background-color: blue;
font-size: 16px;
color: white;
padding: 10px 20px;
border: none;
border-radius: 5px;
display: flex;
align-items: center;
cursor: pointer;
width: 8.2%;

&:hover {
  color: black;
  background-color: lightblue
}
`;

const App = () => {
  // Write your code here
  return(
    <Button> 
  Click me!</Button>
  )
  
};

export default App;

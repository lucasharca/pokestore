import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: ${props => props.theme.colors.background} repeat center top;
    background-size: 50px;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: 14px Roboto, sans-serif;
  }

  #root{
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }
`;

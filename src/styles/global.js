import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

html, body, #root {
  height: 100%;
}

body {
  background: #FFF;
  color: #ADADAD;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
}

button {
  cursor: pointer;
}

body, input, button {
  font: 18px;
  font-family: Arial, Helvetica, sans-serif
}

#root {
  max-width: 1020px;
  margin: 0 auto;
  padding: 0 20px 50px;
}
`;

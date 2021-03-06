import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

html {
  font-size: 62.5%;
}

body {
  color: #FFF;
  background: #ebf2f5;
}

body, input, button, textarea {
  font: 600 1.8rem 'Nunito', sans-serif;
}
`;

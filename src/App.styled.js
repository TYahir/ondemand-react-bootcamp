import { normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Nunito Sans', sans-serif;
  }
`

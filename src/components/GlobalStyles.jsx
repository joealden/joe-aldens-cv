// @ts-check

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
}

html {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 20px;
  color: black;
}

body {
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  margin: 0;
}

/* Remove link underlines when printing */
@media print {
  a {
    text-decoration: none !important;
  }
}
`;

export default GlobalStyles;

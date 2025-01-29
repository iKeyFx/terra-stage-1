import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  --color--bg: rgb(26 31 26 );
  --color--white : rgb(255 255 255);
  --color--green : rgb(82 163 80 );
  --color--text--black :rgb(47  47 47 );
--image-opacity: 90%;
  }

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;



*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  /* font-size: 62.5%; */
  
}

body {
  font-family: "Manrope", sans-serif;
  color: var(--color--white);
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  /* background-color: var(--color-grey-200);
  color: var(--color-grey-500); */
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 1px solid var(--color--green);
}

/* Parent selector */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}

ul {
  list-style: none;
  padding :0;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

}
`;

export default GlobalStyles;

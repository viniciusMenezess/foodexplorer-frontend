import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  :root {
    font-size:62.5%;
  }

  body {
    background-color:${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.WHITE_100};
    -webkit-font-smoothing: antialiased;
  }

  body,input, textarea, button {
    font-family: "Poppins", serif;
    font-size:1.6rem;
  }

  a, li {
    text-decoration:none;
    list-style:none;
  }

  a , button {
    cursor:pointer;
    transition: filter 0.2s
  }

  a:hover, button:hover {
    filter: brightness(0.9)
  }
`
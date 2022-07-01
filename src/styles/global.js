import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body {
    width:100%;
    height:100vh;

    background-color:${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;
  }

  a, ul li {
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
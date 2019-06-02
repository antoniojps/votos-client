import { createGlobalStyle } from "styled-components"
import { normalize } from "polished"

const GlobalStyle = createGlobalStyle`
  ${normalize()}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,body {
    font-family: ${props => props.theme.font.base};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width:100%;
    height: 100%;
    font-size: 16px;
    background-color: ${props => props.theme.color.bg};
  }
  main {
    height: 100%;
    width: 100%;
  }
  `

export default GlobalStyle

import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

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
`;

// style with no background color so that storybook can control the background control
export const GlobalStyleStorybook = createGlobalStyle`
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
  }
  main {
    height: 100%;
    width: 100%;
  }
`;

export default GlobalStyle;

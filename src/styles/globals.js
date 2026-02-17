import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    background-image: 
      radial-gradient(at 0% 0%, rgba(102, 126, 234, 0.15) 0px, transparent 50%),
      radial-gradient(at 100% 0%, rgba(118, 75, 162, 0.15) 0px, transparent 50%),
      radial-gradient(at 100% 100%, rgba(79, 172, 254, 0.15) 0px, transparent 50%),
      radial-gradient(at 0% 100%, rgba(67, 233, 123, 0.15) 0px, transparent 50%);
    background-attachment: fixed;
    background-size: 100% 100%;
    color: ${props => props.theme.colors.primary1};
    cursor: default;
    transition: background-color 0.3s ease, color 0.3s ease;
    position: relative;
    overflow-x: hidden;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`;

export default GlobalStyles;
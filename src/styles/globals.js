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
    color: ${props => props.theme.colors.primary1};
    cursor: default;
    transition: background-color 0.35s ease, color 0.35s ease;
    position: relative;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background: ${props => props.theme.colors.accent1};
    color: ${props => props.theme.colors.background1};
  }

  h1, h2, h3, h4, h5, h6, button {
    font-family: ${props => props.theme.fonts.title};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style: none;
  }

  :focus-visible {
    outline: 2px solid ${props => props.theme.colors.accent1};
    outline-offset: 2px;
  }

  section[id] {
    scroll-margin-top: 80px;
  }

  main {
    padding-top: 64px;
  }
  @media (max-width: 640px) {
    main {
      padding-top: 56px;
    }
  }
`;

export default GlobalStyles;

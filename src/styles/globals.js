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
      radial-gradient(ellipse 80% 50% at 20% 20%, ${props => props.theme.colors.glow} 0%, transparent 50%),
      radial-gradient(ellipse 60% 40% at 80% 80%, rgba(192, 38, 211, 0.12) 0%, transparent 50%),
      radial-gradient(ellipse 50% 30% at 50% 100%, rgba(245, 158, 11, 0.08) 0%, transparent 50%);
    background-attachment: fixed;
    color: ${props => props.theme.colors.primary1};
    cursor: default;
    transition: background-color 0.4s ease, color 0.4s ease;
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

  /* Focus visible for accessibility */
  :focus-visible {
    outline: 2px solid ${props => props.theme.colors.accent1};
    outline-offset: 2px;
  }

  /* Smooth scroll offset for fixed header */
  section[id] {
    scroll-margin-top: 100px;
  }
`;

export default GlobalStyles;

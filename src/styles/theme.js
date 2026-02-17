import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';

import { darkTheme, lightTheme } from "../themes/default";
import GlobalStyles from './globals';

const ThemeWrapper = ({ children }) => {
  const { isDark } = useTheme();
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </StyledThemeProvider>
  );
};

const Theme = ({ children }) => (
  <ThemeProvider>
    <ThemeWrapper>
      {children}
    </ThemeWrapper>
  </ThemeProvider>
);

export default Theme;
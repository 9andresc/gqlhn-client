import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import React from 'react';

import { tuplify } from './index';

const colors = {
  primary: '#F78764',
  primaryDark: '#B46349',
  primaryLight: '#F9A78E',
};

const themes = {
  dark: {
    ...colors,
    background: '#292F36',
    text: '#FFFFFF',
  },
  light: {
    ...colors,
    background: '#FFFFFF',
    text: '#292F36',
  },
};

const defaultContextState = {
  isDark: false,
  toggle: () => {},
};

const ThemeContext = React.createContext(defaultContextState);

function useTheme() {
  return React.useContext(ThemeContext);
}

function useDarkTheme() {
  const [themeState, setThemeState] = React.useState({
    hasThemeMounted: false,
    isDark: false,
  });

  React.useEffect(() => {
    const isDark = localStorage.getItem('isDark') === 'true';
    setThemeState({ hasThemeMounted: true, isDark });
  }, []);

  return tuplify(themeState, setThemeState);
}

type Props = {
  children: React.ReactNode;
};

function ThemeProvider({ children }: Props) {
  const [themeState, setThemeState] = useDarkTheme();

  if (!themeState.hasThemeMounted) {
    return <div />;
  }

  function toggle() {
    const isDark = !themeState.isDark;
    localStorage.setItem('isDark', JSON.stringify(isDark));
    setThemeState({ ...themeState, isDark });
  }

  const computedTheme = themeState.isDark ? themes.dark : themes.light;

  return (
    <EmotionThemeProvider theme={computedTheme}>
      <ThemeContext.Provider
        value={{
          isDark: themeState.isDark,
          toggle,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </EmotionThemeProvider>
  );
}

export { ThemeProvider, useTheme };

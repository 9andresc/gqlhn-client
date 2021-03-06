import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import FontFaceObserver from 'fontfaceobserver';
import React from 'react';

import { tuplify } from './index';

const commonColors = {
  primaryLightColor: '#D99F82',
  primaryColor: '#D16F3E',
  primaryDarkColor: '#9E542F',
  greyLightColor: '#EBECEC',
  greyColor: '#292F36',
  greyDarkColor: '#040505',
  whiteColor: '#FFFFFF',
  dangerColor: '#F52F57',
};

type Theme = {
  backgroundColor: string;
  bodyColor: string;
  dangerColor: string;
  greyColor: string;
  greyDarkColor: string;
  greyLightColor: string;
  primaryColor: string;
  primaryDarkColor: string;
  primaryLightColor: string;
  whiteColor: string;
};

type Themes = {
  dark: Theme;
  light: Theme;
};

const themes: Themes = {
  dark: {
    ...commonColors,
    backgroundColor: commonColors.greyColor,
    bodyColor: commonColors.whiteColor,
  },
  light: {
    ...commonColors,
    backgroundColor: commonColors.whiteColor,
    bodyColor: commonColors.greyColor,
  },
};

const defaultContextState = {
  isDark: false,
  toggle() {},
};

const ThemeContext = React.createContext(defaultContextState);

export function useTheme() {
  return React.useContext(ThemeContext);
}

type Props = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: Props) {
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

export function loadFonts() {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css?family=Rubik:400,700';
  link.rel = 'stylesheet';

  document.head.appendChild(link);

  const font = new FontFaceObserver('Rubik');
  font.load().then(() => {
    document.documentElement.classList.add('font');
  });
}

export enum Breakpoints {
  Tablet = '@media(min-width: 600px)',
  Desktop = '@media(min-width: 900px)',
  Widescreen = '@media(min-width: 1200px)',
}

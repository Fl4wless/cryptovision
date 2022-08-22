import breakPoints from './breakPoints';

export const lightTheme = {
  colors: {
    primary: '#FFF',
    secondary: '#000',
    gray: '#ACACAC',
    lightGray: 'whitesmoke',
  },
  breakPoints: breakPoints,
};

export const darkTheme = {
  colors: {
    primary: 'black',
    secondary: 'blue',
    gray: '#ACACAC',
    lightGray: 'whitesmoke',
  },
  breakPoints: breakPoints,
};

export type TTheme = typeof lightTheme;

export enum ThemeEnum {
  LIGHT = 'light',
  DARK = 'dark',
}

export type TThemeEnum = `${ThemeEnum}`;

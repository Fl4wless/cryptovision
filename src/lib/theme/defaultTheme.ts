import breakPoints from './breakPoints';

const defaultTheme = {
  colors: {
    primary: '#FFF',
    secondary: '#000',
  },
  breakPoints: breakPoints,
};

export type TDefaultTheme = typeof defaultTheme;
export default defaultTheme;

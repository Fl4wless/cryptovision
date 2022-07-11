import breakPoints from './breakPoints';
import zIndexes from './zIndexes';

const defaultTheme = {
  colors: {
    primary: '#000000',
    secondary: 'rgba(34, 34, 34, 0.05)',
    opacity: 'rgba(255, 255, 255, 0.1)',
    black: '#000000',
    blackLighter: '#222222',
    gray: 'rgba(255,255,255,0.3)',
    grayLighter: '#2D2D2D',
    white: '#FFFFFF',
    warning: '#EA9994',

    error: '#EA9994',
    green: '#94EBAC',
    secondaryApp: '#666666',
    darkGray: '#303030',
    lightBlack: '#191919',
    primaryApp: '#F6DFC5',
  },
  breakPoints: breakPoints,
  zIndexes,
};

export type TDefaultTheme = typeof defaultTheme;
export default defaultTheme;

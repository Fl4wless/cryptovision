import { TThemeEnum } from './../lib/theme/defaultTheme';
import { ThemeEnum } from '@/lib/theme/defaultTheme';
import { createContext } from 'react';

const AppContext = createContext({
  isAppPredictionModalOpen: false,
  togglePredictionModal: (open?: boolean) => {},
});

export default AppContext;

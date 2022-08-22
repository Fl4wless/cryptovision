import AppContext from '@/context/app-context';
import { ThemeEnum, TThemeEnum } from '@/lib/theme/defaultTheme';
import React from 'react';

interface AppContextProviderProps {
  children: React.ReactNode;
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [isAppPredictionModalOpen, setIsAppPredictionModalOpen] = React.useState(false);

  const togglePredictionModal = React.useCallback((open?: boolean) => {
    setIsAppPredictionModalOpen((prev) => open ?? !prev);
  }, []);

  const contextValues = {
    isAppPredictionModalOpen,
    togglePredictionModal,
  };

  return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>;
};

export default AppContextProvider;

import AppContext from '@/context/app-context';
import React from 'react';

const useAppContext = () => {
  return React.useContext(AppContext);
};

export default useAppContext;

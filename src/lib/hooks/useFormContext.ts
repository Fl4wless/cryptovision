import FormContext from '@/context/form-context/form-context';
import React from 'react';

const useFormContext = () => {
  return React.useContext(FormContext);
};

export default useFormContext;

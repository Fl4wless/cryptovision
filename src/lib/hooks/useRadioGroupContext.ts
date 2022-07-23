import { RadioGroupContext } from './../../context/radio-group-context';
import React from 'react';

const useRadioGroupContext = () => {
  return React.useContext(RadioGroupContext);
};

export default useRadioGroupContext;

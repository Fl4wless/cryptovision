import { RadioGroupContext } from '@/context/radio-group-context';
import useRadioGroupContext from '@/lib/hooks/useRadioGroupContext';
import React from 'react';
import Radio from '../Radio/Radio';
import { RadioGroupSC } from './RadioGroup.styled';

interface RadioGroupProps {
  children: React.ReactNode | React.ReactNode[];
  layout?: 'horizontal' | 'vertical';
  disabled?: boolean;
  name: string;
}

const RadioGroup = ({
  children,
  layout = 'horizontal',
  disabled = false,
  name,
}: RadioGroupProps) => {
  const contextValues = {
    layout,
    disabled,
    name,
  };

  return (
    <RadioGroupContext.Provider value={contextValues}>
      <RadioGroupSC {...contextValues} role="group">
        {children}
      </RadioGroupSC>
    </RadioGroupContext.Provider>
  );
};

RadioGroup.Radio = Radio;

export default RadioGroup;

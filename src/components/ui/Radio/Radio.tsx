import useRadioGroupContext from '@/lib/hooks/useRadioGroupContext';
import React from 'react';
import { RadioSC } from './Radio.styled';

interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'placeholder'> {
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Radio = (
  { id, label, className, style, ...rest }: RadioProps,
  ref?: React.Ref<HTMLInputElement>,
) => {
  const { name } = useRadioGroupContext();

  return (
    <RadioSC className={className} style={style}>
      <label htmlFor={id}>
        <input type="radio" id={id} {...rest} ref={ref} name={name} />
        {label && <p>{label}</p>}
      </label>
    </RadioSC>
  );
};

export default React.forwardRef(Radio);

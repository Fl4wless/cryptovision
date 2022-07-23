import { removeUndefined } from '@/lib/helpers/removeUndefined';
import useFormContext from '@/lib/hooks/useFormContext';
import { IFormStyleProps } from '@/types/form.types';
import React from 'react';
import { FormFieldSC } from './FormField.styled';

interface FormFieldProps extends IFormStyleProps {
  children: React.ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({ children, size, layout, disabled }) => {
  const defaultStyle = useFormContext();

  const styleProps = {
    size,
    layout,
    disabled,
  };

  const mergedStyle = { ...defaultStyle, ...removeUndefined(styleProps as any) } as IFormStyleProps;

  return <FormFieldSC {...mergedStyle}>{children}</FormFieldSC>;
};

export default FormField;

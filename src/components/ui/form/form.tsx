import React from 'react';
import FormContext from '@/context/form-context/form-context';
import {
  FormikProvider,
  FormikValues,
  Form as FormikForm,
  useFormik,
  useFormikContext,
} from 'formik';
import { IUseFormikBag } from '@/types/formik.types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import FormField from '../FormField';
import { IFormStyleProps } from '@/types/form.types';

interface FormProps<T extends FormikValues = FormikValues>
  extends React.HtmlHTMLAttributes<Omit<HTMLFormElement, 'onSubmit' | 'onReset'>>,
    IFormStyleProps {
  form: IUseFormikBag<T>;
  children: React.ReactNode | React.ReactNode[];
}

const Form = <T extends FormikValues = FormikValues>(
  { children, layout = 'vertical', size = 'sm', disabled = false, form, ...rest }: FormProps<T>,
  ref?: React.Ref<HTMLFormElement>,
) => {
  const contextValues = {
    layout,
    size,
    disabled,
  };

  return (
    <FormContext.Provider value={contextValues}>
      <FormikProvider value={form}>
        <FormikForm {...rest} ref={ref}>
          {children}
        </FormikForm>
      </FormikProvider>
    </FormContext.Provider>
  );
};

Form.useForm = useFormik;
Form.useFormContext = useFormikContext;
Form.Field = FormField;

export default hoistNonReactStatics(React.forwardRef(Form), Form) as typeof Form;

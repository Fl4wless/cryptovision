import { createContext } from 'react';

const FormContext = createContext({ layout: 'horizontal', size: 'sm', disabled: false });

export default FormContext;

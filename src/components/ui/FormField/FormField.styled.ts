import { IFormStyleProps } from '@/types/form.types';
import styled, { css } from 'styled-components';

interface FormFieldSCProps extends IFormStyleProps {}

export const FormFieldSC = styled.div<FormFieldSCProps>`
  display: flex;
  flex-direction: ${({ layout }) => (layout === 'vertical' ? 'column' : 'row')};
  gap: 5px;

  input {
    padding: ${({ size }) => (size === 'lg' ? '10px' : '5px;')};
  }

  ${({ disabled }) => {
    if (disabled) {
      return css`
        opacity: 0.5;
      `;
    }
  }}
`;

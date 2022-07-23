import styled from 'styled-components';

interface FormSCProps {
  layout: 'vertical' | 'horizontal';
  size: 'sm' | 'lg';
  disabled: boolean;
}

export const FormSC = styled.form<FormSCProps>``;

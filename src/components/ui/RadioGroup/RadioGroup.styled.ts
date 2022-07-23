import styled from 'styled-components';

interface RadioGroupSCProps {
  layout: 'horizontal' | 'vertical';
  disabled: boolean;
}

export const RadioGroupSC = styled.div<RadioGroupSCProps>`
  opacity: ${({ disabled }) => (disabled ? '0.5' : '')};

  display: flex;
  flex-direction: ${({ layout }) => (layout === 'horizontal' ? 'row' : 'column')};
`;

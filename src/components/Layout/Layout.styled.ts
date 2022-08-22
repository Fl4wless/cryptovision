import styled from 'styled-components';

export const LayoutSC = styled.div`
  padding: 0 20px;
  background: ${({ theme }) => theme.colors.primary};
  transition: background 0.2s linear;
`;

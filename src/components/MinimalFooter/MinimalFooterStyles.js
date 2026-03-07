import styled from 'styled-components';

export const Foot = styled.footer`
  padding: 24px 32px;
  text-align: center;
  border-top: 1px solid ${p => p.theme.colors.background2};
  background: ${p => p.theme.colors.background1};
`;

export const Text = styled.p`
  font-size: 1.3rem;
  color: ${p => p.theme.colors.textSecondary};
`;

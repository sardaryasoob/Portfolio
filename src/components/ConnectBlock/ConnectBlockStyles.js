import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Section = styled.section`
  padding: 80px 24px 64px;
  background: ${p => p.theme.colors.background1};

  @media (max-width: 768px) {
    padding: 56px 20px 48px;
  }
`;

export const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.text};
  margin-bottom: 16px;
  text-align: center;
  animation: ${fadeUp} 0.6s ease-out;
`;

export const Sub = styled.p`
  font-size: 1.5rem;
  color: ${p => p.theme.colors.textSecondary};
  text-align: center;
  margin-bottom: 40px;
  animation: ${fadeUp} 0.6s ease-out 0.05s both;
`;

export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  animation: ${fadeUp} 0.6s ease-out 0.1s both;
`;

export const LinkCard = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px 28px;
  min-width: 200px;
  background: ${p => p.theme.colors.background2};
  border: 1px solid ${p => p.theme.colors.background3};
  color: ${p => p.theme.colors.text};
  font-size: 1.45rem;
  font-weight: 500;
  transition: border-color 0.2s, color 0.2s, transform 0.2s;

  &:hover {
    border-color: ${p => p.theme.colors.accent1};
    color: ${p => p.theme.colors.accent1};
    transform: translateY(-2px);
  }
`;

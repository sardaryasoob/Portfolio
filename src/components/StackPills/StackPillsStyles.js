import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Section = styled.section`
  padding: 80px 24px;
  background: ${p => p.theme.colors.background1};

  @media (max-width: 768px) {
    padding: 56px 20px;
  }
`;

export const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.text};
  margin-bottom: 32px;
  text-align: center;
  animation: ${fadeUp} 0.6s ease-out;
`;

export const Sub = styled.p`
  font-size: 1.5rem;
  color: ${p => p.theme.colors.textSecondary};
  text-align: center;
  max-width: 480px;
  margin: 0 auto 40px;
  animation: ${fadeUp} 0.6s ease-out 0.05s both;
`;

export const PillsWrap = styled.div`
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  animation: ${fadeUp} 0.6s ease-out 0.1s both;
`;

export const Pill = styled.span`
  display: inline-block;
  padding: 10px 18px;
  font-size: 1.35rem;
  font-weight: 500;
  color: ${p => p.theme.colors.text};
  background: ${p => p.theme.colors.background2};
  border: 1px solid ${p => p.theme.colors.background3};
  transition: border-color 0.2s, color 0.2s;

  &:hover {
    border-color: ${p => p.theme.colors.accent1};
    color: ${p => p.theme.colors.accent1};
  }
`;

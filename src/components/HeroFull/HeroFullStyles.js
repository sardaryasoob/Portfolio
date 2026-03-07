import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Section = styled.section`
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 48px 24px 64px;
  background: ${p => p.theme.colors.background1};

  @media (max-width: 640px) {
    min-height: calc(100vh - 56px);
    padding: 32px 20px 48px;
  }
`;

export const Name = styled.h1`
  font-size: clamp(3rem, 10vw, 5.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.05;
  color: ${p => p.theme.colors.text};
  margin-bottom: 0.35em;
  animation: ${fadeUp} 0.7s ease-out;
`;

export const Role = styled.p`
  font-size: clamp(1.4rem, 3.5vw, 1.9rem);
  font-weight: 500;
  color: ${p => p.theme.colors.accent1};
  margin-bottom: 1rem;
  animation: ${fadeUp} 0.7s ease-out 0.1s both;
`;

export const Tagline = styled.p`
  font-size: clamp(1.5rem, 2.5vw, 1.75rem);
  line-height: 1.6;
  color: ${p => p.theme.colors.textSecondary};
  max-width: 520px;
  margin: 0 auto 2rem;
  animation: ${fadeUp} 0.7s ease-out 0.2s both;
`;

export const Cta = styled.a`
  display: inline-block;
  padding: 14px 28px;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${p => p.theme.colors.background1};
  background: ${p => p.theme.colors.accent1};
  transition: background 0.2s, color 0.2s, transform 0.2s;
  animation: ${fadeUp} 0.7s ease-out 0.3s both;

  &:hover {
    background: ${p => p.theme.colors.accent2};
    transform: translateY(-2px);
  }
`;

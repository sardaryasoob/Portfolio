import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Section = styled.section`
  padding: 80px 24px;
  background: ${p => p.theme.colors.background2};

  @media (max-width: 768px) {
    padding: 56px 20px;
  }
`;

export const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.text};
  margin-bottom: 48px;
  text-align: center;
  animation: ${fadeUp} 0.6s ease-out;
`;

export const Timeline = styled.div`
  max-width: 560px;
  margin: 0 auto;
  position: relative;
  padding-left: 32px;
  border-left: 2px solid ${p => p.theme.colors.background3};
`;

export const Item = styled.div.attrs(p => ({
  style: { animationDelay: `${(p.$index || 0) * 0.12}s` },
}))`
  position: relative;
  padding-bottom: 40px;
  animation: ${fadeUp} 0.6s ease-out both;

  &:last-child {
    padding-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: -36px;
    top: 6px;
    width: 12px;
    height: 12px;
    background: ${p => p.theme.colors.accent1};
  }
`;

export const Year = styled.div`
  font-family: ${p => p.theme.fonts.title};
  font-size: 1.8rem;
  font-weight: 700;
  color: ${p => p.theme.colors.accent1};
  margin-bottom: 8px;
`;

export const Text = styled.p`
  font-size: 1.5rem;
  line-height: 1.65;
  color: ${p => p.theme.colors.textSecondary};
`;

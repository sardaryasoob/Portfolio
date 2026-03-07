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

export const Inner = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const Bio = styled.p`
  font-size: 1.6rem;
  line-height: 1.75;
  color: ${p => p.theme.colors.textSecondary};
  margin-bottom: 48px;
  animation: ${fadeUp} 0.6s ease-out;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 40px;
  }
`;

export const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  animation: ${fadeUp} 0.6s ease-out 0.1s both;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`;

export const Stat = styled.div`
  text-align: center;
  padding: 24px 16px;
  background: ${p => p.theme.colors.background1};
  border: 1px solid ${p => p.theme.colors.background3};
`;

export const StatNum = styled.div`
  font-family: ${p => p.theme.fonts.title};
  font-size: 2.4rem;
  font-weight: 700;
  color: ${p => p.theme.colors.accent1};
  margin-bottom: 4px;
`;

export const StatLabel = styled.div`
  font-size: 1.3rem;
  color: ${p => p.theme.colors.textSecondary};
`;

import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;
  margin: 2rem 0 3rem;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin: 1.5rem 0 2.5rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
    max-width: 400px;
    margin: 1.5rem auto 2rem;
  }
`;

export const Box = styled.div`
  background: ${(props) => props.theme.colors.background1};
  border: 2px solid ${(props) => props.theme.colors.background2};
  padding: 1.5rem;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.2s ease;
  animation: ${fadeInUp} 0.5s ease-out ${(props) => (props.index || 0) * 0.08}s both;

  &:hover {
    border-color: ${(props) => props.theme.colors.accent1};
  }

  @media ${(props) => props.theme.breakpoints.md} {
    min-height: 100px;
    padding: 1.2rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    min-height: 90px;
    padding: 1rem;
  }
`;

export const BoxNum = styled.h5`
  font-weight: 800;
  font-size: 2.6rem;
  line-height: 1.2;
  color: ${(props) => props.theme.colors.accent1};
  margin-bottom: 0.4rem;
  letter-spacing: -0.02em;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 2.2rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.9rem;
  }
`;

export const BoxText = styled.p`
  font-size: 1.4rem;
  line-height: 1.35;
  color: ${(props) => props.theme.colors.textSecondary};
  font-weight: 500;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
  }
`;

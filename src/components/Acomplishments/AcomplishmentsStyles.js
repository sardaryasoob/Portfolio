import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const countUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin: 2rem 0 3rem;

  @media ${(props) => props.theme.breakpoints.md} {
    gap: 1.2rem;
    margin: 1.5rem 0 2.5rem;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    max-width: 420px;
    margin: 1.5rem auto 2rem;
  }
`;

export const Box = styled.div`
  background: ${(props) => props.theme.colors.background2};
  border: 1px solid ${(props) => props.theme.colors.background1};
  border-radius: 16px;
  padding: 1.8rem;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.35s ease;
  animation: ${fadeInUp} 0.6s ease-out ${(props) => (props.index || 0) * 0.1}s both;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px ${(props) => props.theme.colors.glow};
    border-color: transparent;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    min-height: 120px;
    padding: 1.4rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    min-height: 100px;
    padding: 1.2rem;
  }
`;

export const BoxNum = styled.h5`
  font-weight: 700;
  font-size: 3.2rem;
  line-height: 1.2;
  background: ${(props) => props.theme.colors.gradient1};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  animation: ${countUp} 0.6s ease-out ${(props) => (props.index || 0) * 0.1 + 0.2}s both;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 2.6rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2.2rem;
  }
`;

export const BoxText = styled.p`
  font-size: 1.5rem;
  line-height: 1.4;
  color: ${(props) => props.theme.colors.textSecondary};
  font-weight: 500;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.4rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
  }
`;

export const Join = styled.div`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${(props) => props.theme.breakpoints.md} {
    padding-bottom: 64px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    flex-direction: column;
    padding-bottom: 40px;
  }
`;

export const JoinText = styled.h5`
  font-size: 2rem;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.textSecondary};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.8rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
    margin: 0 0 1rem;
    text-align: center;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 160px;
    justify-content: space-between;
  }
`;

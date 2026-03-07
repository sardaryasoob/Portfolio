import styled, { keyframes } from 'styled-components';

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

const lineExpand = keyframes`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`;

export const HeroContainer = styled.div`
  width: 100%;
  position: relative;
  animation: ${fadeInUp} 0.7s ease-out;
`;

export const LeftSection = styled.div`
  width: 100%;
  animation: ${fadeInUp} 0.8s ease-out 0.1s both;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    margin: 0 auto;
  }
`;

export const Greeting = styled.span`
  display: inline-block;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${props => props.theme.colors.accent1};
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 0.6rem;
  animation: ${fadeInUp} 0.6s ease-out 0.15s both;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
    letter-spacing: 0.15em;
  }
`;

export const GradientText = styled.span`
  display: block;
  color: ${props => props.theme.colors.text};
  font-weight: 800;
  position: relative;
  letter-spacing: -0.03em;

  &.name {
    font-size: clamp(3rem, 7vw, 5.2rem);
    line-height: 1.05;
    margin: 0.15em 0;
    animation: ${fadeInUp} 0.7s ease-out 0.2s both;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -4px;
      width: 80px;
      height: 4px;
      background: ${props => props.theme.colors.accent1};
      animation: ${lineExpand} 0.6s ease-out 0.5s both;
    }
  }

  &.role {
    font-size: clamp(1.6rem, 3.5vw, 2.2rem);
    font-weight: 600;
    color: ${props => props.theme.colors.textSecondary};
    animation: ${fadeInUp} 0.7s ease-out 0.3s both;
  }
`;

export const Tagline = styled.p`
  font-size: 1.6rem;
  line-height: 1.7;
  color: ${props => props.theme.colors.textSecondary};
  max-width: 520px;
  margin-top: 1.8rem;
  animation: ${fadeInUp} 0.8s ease-out 0.35s both;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.45rem;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
  animation: ${fadeInUp} 0.8s ease-out 0.45s both;
`;

export const ContactItem = styled.a`
  color: ${props => props.theme.colors.text};
  font-size: 1.3rem;
  font-weight: 500;
  padding: 0.7rem 1.2rem;
  border: 2px solid ${props => props.theme.colors.background2};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${props => props.theme.colors.accent1};
    color: ${props => props.theme.colors.accent1};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.15rem;
    padding: 0.6rem 1rem;
  }
`;

export const CTAWrapper = styled.div`
  animation: ${fadeInUp} 0.8s ease-out 0.55s both;
  margin-top: 0.5rem;
`;

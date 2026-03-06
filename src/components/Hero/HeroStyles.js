import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const gradientMove = keyframes`
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
`;

const shine = keyframes`
  0% { left: -100%; }
  60%, 100% { left: 100%; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
`;

const pulseSoft = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.9; transform: scale(1.02); }
`;

export const HeroContainer = styled.div`
  width: 100%;
  position: relative;
  animation: ${fadeInUp} 0.9s ease-out;
`;

export const LeftSection = styled.div`
  width: 100%;
  animation: ${fadeInUp} 1s ease-out 0.15s both;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 90%;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    margin: 0 auto;
  }
`;

export const Greeting = styled.span`
  display: inline-block;
  font-size: 1.8rem;
  font-weight: 500;
  color: ${props => props.theme.colors.textSecondary};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 0.8rem;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.4rem;
  }
`;

export const GradientText = styled.span`
  display: inline-block;
  background: ${props => props.theme.colors.gradient1};
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${gradientMove} 4s ease infinite;
  font-weight: 800;
  position: relative;
  overflow: hidden;

  &.name {
    font-size: clamp(3.2rem, 8vw, 5.6rem);
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin: 0.2em 0;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 50%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.15),
        transparent
      );
      animation: ${shine} 3s ease-in-out infinite;
    }
  }

  &.role {
    font-size: clamp(1.8rem, 4vw, 2.4rem);
    font-weight: 600;
    opacity: 0.95;
  }
`;

export const Tagline = styled.p`
  font-size: 1.7rem;
  line-height: 1.65;
  color: ${props => props.theme.colors.textSecondary};
  max-width: 560px;
  margin-top: 1.6rem;
  animation: ${fadeInUp} 1s ease-out 0.35s both;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin: 2.4rem 0;
  animation: ${fadeInUp} 1s ease-out 0.5s both;
`;

export const ContactItem = styled.a`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  padding: 1rem 1.8rem;
  border-radius: 999px;
  background: ${props => props.theme.colors.background2};
  border: 1px solid ${props => props.theme.colors.background1};
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 1.35rem;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${props => props.theme.colors.gradient1};
    opacity: 0;
    transition: opacity 0.35s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px ${props => props.theme.colors.glow};
    border-color: transparent;
    color: ${props => props.theme.colors.text};
    &::before {
      opacity: 1;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
    padding: 0.85rem 1.4rem;
  }
`;

export const CTAWrapper = styled.div`
  animation: ${fadeInUp} 1s ease-out 0.6s both;
  margin-top: 0.5rem;
`;

import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  position: relative;
  animation: ${fadeInUp} 0.8s ease-out;
`;

export const LeftSection = styled.div`
  width: 100%;
  animation: ${fadeInUp} 1s ease-out 0.2s both;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const GradientText = styled.span`
  background: ${props => props.theme.colors.gradient1};
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${gradientShift} 3s ease infinite;
  display: inline-block;
  font-weight: 700;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin: 2rem 0;
  animation: ${fadeInUp} 1s ease-out 0.4s both;
`;

export const ContactItem = styled.a`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  padding: 1rem 2rem;
  border-radius: 30px;
  background: ${props => props.theme.colors.background2};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 1.4rem;
  border: 2px solid ${props => props.theme.colors.background1};
  position: relative;
  overflow: hidden;
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: ${props => props.theme.colors.gradient1};
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    border-color: transparent;
    animation: ${pulse} 0.6s ease;
    
    &::before {
      width: 300px;
      height: 300px;
    }
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
    padding: 0.8rem 1.5rem;
  }
`;

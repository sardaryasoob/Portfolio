import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Section = styled.section`
  display: ${(props) => props.grid ? "grid" : "flex"};
  flex-direction: ${(props) => props.row ? "row" : "column"};
  padding: ${(props) => props.nopadding ? "0" : "48px 0 0"};
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${(props) => props.theme.breakpoints.md} {
    padding: ${(props) => props.nopadding ? "0" : "32px 0 0"};
    flex-direction: column;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => props.nopadding ? "0" : "24px 0 0"};
    width: 100%;
    flex-direction: column;
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => props.main ? '3.2rem' : '2.8rem'};
  line-height: 1.15;
  width: max-content;
  max-width: 100%;
  color: ${props => props.theme.colors.text};
  margin-bottom: 1.2rem;
  padding: ${(props) => props.main ? '3rem 0 1rem' : '0'};
  animation: ${fadeIn} 0.6s ease-out;
  position: relative;
  letter-spacing: -0.02em;
  text-transform: uppercase;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 48px;
    height: 3px;
    background: ${props => props.theme.colors.accent1};
    animation: ${fadeIn} 0.8s ease-out 0.2s both;
  }

  @media ${props => props.theme.breakpoints.md} {
    font-size: ${(props) => props.main ? '2.6rem' : '2.2rem'};
    padding: ${(props) => props.main ? '2.5rem 0 0.8rem' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: ${(props) => props.main ? '2rem' : '1.8rem'};
    padding: ${(props) => props.main ? '1.5rem 0 0.5rem' : '0'};
    &::after { width: 32px; height: 2px; }
  }
`;

export const SectionText = styled.p`
  max-width: 720px;
  font-size: 1.5rem;
  line-height: 1.7;
  font-weight: 400;
  padding-bottom: 2.5rem;
  color: ${props => props.theme.colors.textSecondary};
  animation: ${fadeIn} 0.8s ease-out 0.15s both;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.4rem;
    line-height: 1.65;
    padding-bottom: 2rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.35rem;
    line-height: 1.6;
    padding-bottom: 1.5rem;
  }
`;

export const SectionDivider = styled.div`
  width: 48px;
  height: 3px;
  background: ${(props) => props.colorAlt
    ? props.theme.colors.accent2
    : props.theme.colors.accent1};
  animation: ${fadeIn} 0.6s ease-out;
  margin: ${(props) => props.divider ? "3rem 0" : "0"};

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 36px;
    height: 2px;
  }
`;

export const SectionSubText = styled.p`
  max-width: 720px;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.65;
  color: ${props => props.theme.colors.textSecondary};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 1.4rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.3rem;
  }
`;

export const SecondaryBtn = styled.button`
  color: ${props => props.theme.colors.text};
  background: none;
  border: 2px solid ${props => props.theme.colors.background2};
  padding: 1rem 1.5rem;
  font-weight: 600;
  font-size: 1.5rem;
  width: fit-content;
  margin-top: 2rem;
  margin-bottom: 4rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${props => props.theme.colors.accent1};
    color: ${props => props.theme.colors.accent1};
  }

  &:focus { outline: none; }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 1.5rem;
    margin-bottom: 2.5rem;
    padding: 0.8rem 1.2rem;
    font-size: 1.35rem;
  }
`;

export const ButtonBack = styled.div`
  width: ${({ alt }) => alt ? '140px' : '180px'};
  height: ${({ alt }) => alt ? '48px' : '52px'};
  font-size: ${({ alt }) => alt ? '1.5rem' : '1.6rem'};
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ alt, form }) => (alt || form) ? '0' : '0 0 4rem'};
  color: ${props => props.theme.colors.background1};
  background: ${props => props.theme.colors.accent1};
  border: 2px solid ${props => props.theme.colors.accent1};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &:hover {
    background: transparent;
    color: ${props => props.theme.colors.accent1};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    max-width: ${({ alt }) => alt ? '140px' : 'none'};
    height: 48px;
    font-size: 1.4rem;
    margin-bottom: ${({ alt }) => alt ? '0' : '2.5rem'};
  }
`;

export const ButtonFront = styled.button`
  border: none;
  color: ${props => props.theme.colors.background1};
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  opacity: ${({ disabled }) => disabled ? '.5' : '1'};
  transition: opacity 0.2s ease;
  font-size: inherit;
  font-weight: inherit;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &:hover {
    opacity: 0;
  }
  &:focus { outline: none; }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.4rem;
  }
`;

export const LinkContainer = styled.div`
  margin-left: ${({ large }) => large ? '1.5rem' : '1rem'};
  transition: 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const LinkIconImg = styled.div`
  display: flex;
  height: ${({ large }) => large ? '28px' : '22px'};
`;

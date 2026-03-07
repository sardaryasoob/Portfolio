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

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-16px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const CarouselContainer = styled.ul`
  max-width: 1040px;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  animation: ${fadeInUp} 0.6s ease-out;
  margin-left: 24px;
  margin-bottom: 4rem;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${props => props.theme.breakpoints.sm} {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-left: 0;
    margin-bottom: 1rem;
  }
`;

export const CarouselMobileScrollNode = styled.div`
  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    min-width: ${({ final }) => final ? '120%' : 'min-content'};
  }
`;

export const CarouselItem = styled.div.attrs(props => ({
  style: {
    animationDelay: `${(props.index || 0) * 0.08}s`
  }
}))`
  background: ${props => props.theme.colors.background1};
  border: 2px solid ${props => props.theme.colors.background2};
  max-width: 200px;
  padding: 1.2rem;
  transition: all 0.2s ease;
  animation: ${slideIn} 0.5s ease-out both;

  &:hover {
    border-color: ${props => props.theme.colors.accent1};
  }

  @media ${props => props.theme.breakpoints.md} {
    max-width: 140px;
    padding: 1rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    margin-left: 24px;
    min-width: 140px;
    padding: 1rem;
    scroll-snap-align: start;
    border-color: ${props => props.active === props.index ? props.theme.colors.accent1 : props.theme.colors.background2};
    opacity: ${props => props.active === props.index ? 1 : 0.6};
  }
`;

export const CarouselItemTitle = styled.h4`
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.accent1};
  margin-bottom: 0.6rem;
  transition: color 0.2s ease;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 1.5rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.4rem;
  }
`;

export const CarouselItemImg = styled.svg`
  margin-left: 12px;
  width: 100%;
  opacity: 0.5;

  @media ${props => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const CarouselItemText = styled.p`
  font-size: 1.35rem;
  line-height: 1.5;
  color: ${props => props.theme.colors.textSecondary};
  padding-right: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 1.2rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.15rem;
    padding-right: 0;
  }
`;

export const CarouselButtons = styled.div`
  width: 200px;
  display: none;
  visibility: hidden;

  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    visibility: visible;
    margin-bottom: 2.5rem;
    gap: 4px;
  }
`;

export const CarouselButton = styled.button`
  background: none;
  padding: 6px;
  border: none;
  cursor: pointer;
  opacity: ${(props) => props.active === props.index ? '1' : '0.35'};
  transform: ${(props) => props.active === props.index ? 'scale(1.4)' : 'scale(1)'};
  transition: all 0.2s ease;

  &:focus {
    outline: none;
  }
`;

export const CarouselButtonDot = styled.div`
  background: ${props => props.theme.colors.accent1};
  width: 4px;
  height: 4px;
  transition: all 0.2s ease;
`;

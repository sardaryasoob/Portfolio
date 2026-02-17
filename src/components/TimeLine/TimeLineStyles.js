
import styled, { keyframes } from 'styled-components'

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

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const CarouselContainer = styled.ul`
  max-width: 1040px;
  background: ${props => props.theme.colors.background1};
  padding: 0rem;
  list-style:none;
  display: flex;
  justify-content: space-between; 
  /* overflow-x: hidden; */
  animation: ${fadeInUp} 0.8s ease-out;

  margin-left: 32px;
  &:first-of-type{
    margin-left: 0px;
  }

  margin-bottom: 80px;

  //remove scrollbar
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
    margin-bottom: 8px;
  }
`
export const CarouselMobileScrollNode = styled.div`
  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    min-width: ${({ final }) => final ? `120%;` : `min-content`}
  }
`

export const CarouselItem = styled.div.attrs(props => ({
  style: {
    animationDelay: `${(props.index || 0) * 0.1}s`
  }
}))`
  background: ${props => props.theme.colors.background1};
  border-radius: 8px;
  max-width: 196px;
  padding: 1rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  animation: ${slideIn} 0.6s ease-out both;
  
  &:hover {
    background: ${props => props.theme.colors.background2};
    border-color: ${props => props.theme.colors.accent1};
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }

  @media ${props => props.theme.breakpoints.md} {
    max-width: 124px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    margin-left: 32px;
    min-width: 120px;
    background: ${props => props.theme.colors.background2};
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;
    height: fit-content;
    
    ${(props) => props.active === props.index ? `opacity: 1` : `opacity: 0.5`}; 
  }
`

export const CarouselItemTitle = styled.h4`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */
  background: ${props => props.theme.colors.gradient1};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 8px;
  transition: all 0.3s ease;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`
export const CarouselItemImg = styled.svg`
  margin-left: 21px;
  -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));
  width: 100%;

  @media ${props => props.theme.breakpoints.sm} {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`

export const CarouselItemText = styled.p`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: ${props => props.theme.colors.textSecondary};
  padding-right: 16px;
  transition: color 0.3s ease;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 12px;
    line-height: 18px;
    padding-right: 32px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 16px;
    padding-right: 0;
  }
`
export const CarouselButtons = styled.div`
  width: 288px;

  display: none;
  visibility: hidden;

  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
  }
`

export const CarouselButton = styled.button`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${(props) => props.active === props.index ? `1` : `.33`};
  transform: ${(props) => props.active === props.index ? `scale(1.6)` : `scale(1)`};

  &:focus {
    outline: none;
  }
`

export const CarouselButtonDot = styled.div`
  background: ${props => props.theme.colors.gradient1};
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
  transition: all 0.3s ease;
`

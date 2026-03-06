import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
`;

const underlineSlide = keyframes`
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
`;

export const Container = styled.header`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1.2rem 2rem;
  padding-top: 1.8rem;
  background: ${props => props.theme.colors.background1};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid ${props => props.theme.colors.background2};
  position: sticky;
  top: 0;
  z-index: 100;
  animation: ${fadeIn} 0.5s ease-out;
  transition: background 0.3s ease, border-color 0.3s ease;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 56px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
    padding: 1rem;
  }
`;

export const Div1 = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;

export const Span = styled.span`
  font-size: 1.9rem;
  font-weight: 700;
  color: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.gradient1};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.9;
  }
`;

export const Div2 = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
  }
`;

export const Div3 = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-area: 1 / 4 / 2 / 6;
  }
`;

export const NavLink = styled.a`
  font-size: 1.65rem;
  font-weight: 500;
  color: ${props => props.theme.colors.textSecondary};
  transition: color 0.25s ease;
  position: relative;
  padding: 0.4rem 0;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: ${props => props.theme.colors.gradient1};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease;
    border-radius: 2px;
  }

  &:hover {
    color: ${props => props.theme.colors.text};
    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
    padding: 0.35rem;
  }
`;

export const SocialIcons = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  color: ${props => props.theme.colors.text};
  background: ${props => props.theme.colors.background2};
  border: 1px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.gradient1};
    transform: scale(1.08);
    box-shadow: 0 4px 16px ${props => props.theme.colors.glow};
  }
`;

export const ThemeToggle = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colors.background2};
  background: ${props => props.theme.colors.background2};
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.theme.colors.gradient1};
    border-color: transparent;
    transform: rotate(15deg) scale(1.05);
    box-shadow: 0 4px 16px ${props => props.theme.colors.glow};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 40px;
    height: 40px;
  }
`;

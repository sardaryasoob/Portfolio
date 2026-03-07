import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-12px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 1.6rem 2rem;
  background: ${props => props.theme.colors.background1};
  border-bottom: 2px solid ${props => props.theme.colors.background2};
  position: sticky;
  top: 0;
  z-index: 100;
  animation: ${fadeIn} 0.4s ease-out;
  transition: background 0.3s ease, border-color 0.3s ease;
  gap: 1rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
    padding: 1rem;
  }
`;

export const Div1 = styled.div`
  display: flex;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-column: 1;
  }
`;

export const Span = styled.span`
  font-size: 1.6rem;
  font-weight: 800;
  color: ${props => props.theme.colors.text};
  letter-spacing: -0.03em;
  text-transform: uppercase;
  transition: color 0.2s ease;
  &:hover {
    color: ${props => props.theme.colors.accent1};
  }
`;

export const Div2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-column: 1 / -1;
    grid-row: 2;
    gap: 1.2rem;
    justify-content: flex-start;
  }
`;

export const Div3 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.8rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-column: 2;
    grid-row: 1;
  }
`;

export const NavLink = styled.a`
  font-size: 1.4rem;
  font-weight: 600;
  color: ${props => props.theme.colors.textSecondary};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: ${props => props.theme.colors.accent1};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.25s ease;
  }

  &:hover {
    color: ${props => props.theme.colors.text};
    &::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
  }
`;

export const SocialIcons = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border: 2px solid ${props => props.theme.colors.background2};
  color: ${props => props.theme.colors.text};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${props => props.theme.colors.accent1};
    color: ${props => props.theme.colors.accent1};
  }
`;

export const ThemeToggle = styled.button`
  width: 42px;
  height: 42px;
  border: 2px solid ${props => props.theme.colors.background2};
  background: transparent;
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${props => props.theme.colors.accent1};
    color: ${props => props.theme.colors.accent1};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 38px;
    height: 38px;
  }
`;

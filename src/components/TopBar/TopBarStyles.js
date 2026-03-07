import styled from 'styled-components';

export const Bar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  background: ${p => p.theme.colors.background1};
  border-bottom: 1px solid ${p => p.theme.colors.background2};
  z-index: 200;
  transition: background 0.3s, border-color 0.3s;

  @media ${p => p.theme.breakpoints.sm} {
    padding: 0 20px;
    height: 56px;
  }
`;

export const Logo = styled.a`
  font-family: ${p => p.theme.fonts.title};
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.text};

  &:hover {
    color: ${p => p.theme.colors.accent1};
  }
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media ${p => p.theme.breakpoints.sm} {
    gap: 20px;
  }
`;

export const NavItem = styled.li``;

export const NavLink = styled.a`
  font-size: 1.35rem;
  font-weight: 500;
  color: ${p => p.theme.colors.textSecondary};
  transition: color 0.2s;

  &:hover {
    color: ${p => p.theme.colors.accent1};
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const IconBtn = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.colors.text};
  border: 1px solid ${p => p.theme.colors.background2};
  transition: color 0.2s, border-color 0.2s;

  &:hover {
    color: ${p => p.theme.colors.accent1};
    border-color: ${p => p.theme.colors.accent1};
  }
`;

export const ThemeBtn = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 1px solid ${p => p.theme.colors.background2};
  color: ${p => p.theme.colors.text};
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s;

  &:hover {
    color: ${p => p.theme.colors.accent1};
    border-color: ${p => p.theme.colors.accent1};
  }
`;

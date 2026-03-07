import React from 'react';
import Link from 'next/link';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { useTheme } from '../../contexts/ThemeContext';
import { Bar, Logo, Nav, NavItem, NavLink, Right, IconBtn, ThemeBtn } from './TopBarStyles';

const TopBar = () => {
  const { isDark, toggleTheme } = useTheme();

  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Bar>
      <Link href="/" passHref>
        <Logo>SY</Logo>
      </Link>
      <Nav>
        <NavItem>
          <NavLink href="#work" onClick={(e) => scrollTo(e, 'work')}>Work</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#stack" onClick={(e) => scrollTo(e, 'stack')}>Stack</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#journey" onClick={(e) => scrollTo(e, 'journey')}>Journey</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#connect" onClick={(e) => scrollTo(e, 'connect')}>Connect</NavLink>
        </NavItem>
      </Nav>
      <Right>
        <ThemeBtn onClick={toggleTheme} aria-label="Toggle theme">
          {isDark ? <BsSunFill size="1.4rem" /> : <BsMoonFill size="1.4rem" />}
        </ThemeBtn>
        <IconBtn href="https://www.linkedin.com/in/sardar-yasoob/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <AiFillLinkedin size="1.6rem" />
        </IconBtn>
      </Right>
    </Bar>
  );
};

export default TopBar;

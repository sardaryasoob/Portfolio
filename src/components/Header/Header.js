import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillCloseCircle,
} from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { DiCssdeck } from "react-icons/di";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useMediaQuery } from 'react-responsive';
import { useTheme } from '../../contexts/ThemeContext';
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
  ThemeToggle,
} from "./HeaderStyles";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { isDark, toggleTheme } = useTheme();

  return (
    <Container>
      <Div1>
        <Link href="/#header">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              marginBottom: "20px",
            }}
          >
            <DiCssdeck size="3rem" style={{ color: "inherit" }} />
            <Span>Sardar Yasoob</Span>
          </a>
        </Link>
      </Div1>
      <Div2>
        
          <li>
            <Link href="/#header">
              <NavLink>Home</NavLink>
            </Link>
          </li>
      
       
        <li>
          <Link href="/#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        {!isMobile && (
        <li>
          <Link href="/#tech">
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
         )} 
        {/* {!isMobile && ( */}
        <li>
          <Link href="/#about">
            <NavLink>About</NavLink>
          </Link>
        </li>
       { /*)}*/}
        {/* <li>
          <Link href="/services">
            <NavLink>Services</NavLink>
          </Link>
        </li> */}
      </Div2>
      <Div3>
        <ThemeToggle onClick={toggleTheme} aria-label="Toggle theme">
          {isDark ? <BsSunFill size="2rem" /> : <BsMoonFill size="2rem" />}
        </ThemeToggle>
        <SocialIcons href="https://www.linkedin.com/in/sardar-yasoob/" target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;

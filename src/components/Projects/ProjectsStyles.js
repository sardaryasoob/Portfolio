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

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  background: ${props => props.theme.colors.background2};
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  filter: grayscale(20%);
`;

export const CardOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: ${props => props.color || props.theme.colors.accent1};
  opacity: 0;
  transition: opacity 0.3s ease;
  mix-blend-mode: multiply;
`;

export const ProjectNumber = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 4rem;
  font-weight: 800;
  color: ${props => props.theme.colors.background2};
  opacity: 0.6;
  z-index: 1;
  line-height: 1;
  font-family: ${props => props.theme.fonts.title};
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  padding: 3rem 0;
  gap: 2.5rem;
  position: relative;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 2rem 0;
    gap: 2rem;
  }
`;

export const TitleContent = styled.div`
  text-align: left;
  z-index: 2;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 700;
  font-size: ${(props) => props.title ? '2rem' : '1.6rem'};
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.text};
  padding: 1.2rem 1.2rem 0.4rem;
  transition: color 0.2s ease;
  text-transform: uppercase;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => props.title ? '1.7rem' : '1.45rem'};
    padding: 1rem 1rem 0.3rem;
  }
`;

export const Hr = styled.hr`
  width: 40px;
  height: 2px;
  margin: 0 1.2rem 0.8rem;
  border: 0;
  background: ${props => props.theme.colors.accent1};
  transition: width 0.2s ease;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 0 1rem 0.6rem;
  }
`;

export const BlogCard = styled.div.attrs(props => ({
  style: {
    animationDelay: `${(props.index || 0) * 0.12}s`
  }
}))`
  border: 2px solid ${props => props.theme.colors.background2};
  text-align: left;
  width: 100%;
  max-width: 420px;
  background: ${props => props.theme.colors.background1};
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.6s ease-out both;
  overflow: hidden;
  position: relative;

  &:hover {
    border-color: ${props => props.theme.colors.accent1};
    box-shadow: 0 0 0 1px ${props => props.theme.colors.accent1};

    ${Img} {
      transform: scale(1.05);
      filter: grayscale(0%);
    }
    ${CardOverlay} {
      opacity: 0.15;
    }
    ${HeaderThree} {
      color: ${props => props.theme.colors.accent1};
    }
    ${Hr} {
      width: 60px;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 100%;
  }
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 1.2rem 1.2rem;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1.4rem;
  line-height: 1.65;
  transition: color 0.2s ease;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 1rem 1rem;
    font-size: 1.35rem;
  }
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  padding: 0 1.2rem 1.2rem;
`;

export const Tag = styled.li.attrs(props => ({
  style: {
    animationDelay: `${(props.index || 0) * 0.05}s`
  }
}))`
  color: ${props => props.theme.colors.text};
  font-size: 1.2rem;
  padding: 0.4rem 0.8rem;
  background: transparent;
  border: 2px solid ${props => props.theme.colors.background2};
  font-weight: 500;
  transition: all 0.2s ease;
  animation: ${scaleIn} 0.4s ease-out both;

  &:hover {
    border-color: ${props => props.theme.colors.accent1};
    color: ${props => props.theme.colors.accent1};
  }
`;

export const UtilityList = styled.ul`
  list-style: none;
  padding: 0 1.2rem 1.2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const ExternalLinks = styled.a`
  color: ${props => props.theme.colors.background1};
  font-size: 1.35rem;
  font-weight: 700;
  padding: 0.6rem 1.2rem;
  background: ${props => props.theme.colors.accent1};
  border: 2px solid ${props => props.theme.colors.accent1};
  transition: all 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.04em;

  &:hover {
    background: transparent;
    color: ${props => props.theme.colors.accent1};
  }
`;

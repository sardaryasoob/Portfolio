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

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-radius: 15px 15px 0 0;
  background: ${props => props.theme.colors.background1};
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  filter: brightness(0.8);
`;

export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.color || props.theme.colors.gradient1};
  opacity: 0;
  transition: opacity 0.4s ease;
  mix-blend-mode: overlay;
`;

export const ProjectNumber = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 8rem;
  font-weight: 900;
  background: ${props => props.color || props.theme.colors.gradient1};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0.1;
  z-index: 1;
  line-height: 1;
  transition: all 0.4s ease;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
padding: 4rem 3rem;
place-items: center;
column-gap: 3rem;
row-gap: 4rem;
position: relative;

&::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 100%;
  background: ${props => props.theme.colors.gradient1};
  opacity: 0.1;
  z-index: 0;
}

@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
  gap: 3rem;
  
  &::before {
    display: none;
  }
}

`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 700;
  letter-spacing: 1px;
  background: ${props => props.theme.colors.gradient1};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  padding: 1.5rem 1rem 0.5rem;
  font-size: ${(props) => props.title ? '2.5rem' : '2rem'};
  transition: all 0.4s ease;
  position: relative;
  z-index: 2;
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: ${props => props.theme.colors.gradient1};
  border-radius: 2px;
  transition: width 0.3s ease;
`;

export const BlogCard = styled.div.attrs(props => ({
  style: {
    animationDelay: `${(props.index || 0) * 0.15}s`
  }
}))`
  border-radius: 20px;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.2),
    0 1px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 420px;
  background: ${props => props.theme.colors.background2};
  border: 2px solid ${props => props.theme.colors.background1};
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeInUp} 0.8s ease-out both;
  overflow: hidden;
  position: relative;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: ${props => props.color || props.theme.colors.gradient1};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 2;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 2px;
    background: ${props => props.color || props.theme.colors.gradient1};
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-15px) scale(1.02);
    box-shadow: 
      0 20px 60px rgba(0, 0, 0, 0.3),
      0 0 40px ${props => props.color ? 'rgba(102, 126, 234, 0.2)' : 'rgba(102, 126, 234, 0.2)'};
    border-color: transparent;
    
    &::before {
      transform: scaleX(1);
    }
    
    &::after {
      opacity: 1;
    }
    
    ${Img} {
      transform: scale(1.15) rotate(2deg);
      filter: brightness(1);
    }
    
    ${CardOverlay} {
      opacity: 0.3;
    }
    
    ${ProjectNumber} {
      opacity: 0.2;
      transform: scale(1.1);
    }
    
    ${HeaderThree} {
      transform: translateY(-3px);
    }
    
    ${Hr} {
      width: 100px;
    }
  }
  
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    max-width: 100%;
  }
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 2.5rem 1rem;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1.5rem;
  line-height: 1.8;
  text-align: left;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 1.5rem 1rem;
    font-size: 1.4rem;
  }
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0 2rem 2rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem 0 0;
  position: relative;
  z-index: 2;
`;

export const ExternalLinks = styled.a`
color: ${props => props.theme.colors.text};
font-size: 1.4rem;
padding: 1rem 2rem;
background: ${props => props.theme.colors.gradient1};
border-radius: 30px;
transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
text-decoration: none;
font-weight: 600;
display: inline-flex;
align-items: center;
justify-content: center;
position: relative;
overflow: hidden;
min-width: 120px;
box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

&::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.gradient2};
  transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}

&::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 30px;
  padding: 2px;
  background: ${props => props.theme.colors.gradient1};
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

&:hover {
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  
  &::before {
    left: 0;
  }
  
  &::after {
    opacity: 1;
  }
}

&:active {
  transform: translateY(-2px) scale(1.02);
}
`;

export const TagList = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 0.8rem;
padding: 1.5rem 2rem;
`
export const Tag = styled.li.attrs(props => ({
  style: {
    animationDelay: `${(props.index || 0) * 0.08}s`
  }
}))`
color: ${props => props.theme.colors.text};
font-size: 1.3rem;
padding: 0.6rem 1.2rem;
background: ${props => props.theme.colors.background1};
border-radius: 25px;
border: 1.5px solid ${props => props.theme.colors.accent1};
transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
animation: ${scaleIn} 0.5s ease-out both;
font-weight: 500;
cursor: default;
position: relative;
overflow: hidden;

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
  transform: translateY(-3px) scale(1.05);
  border-color: transparent;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  
  &::before {
    width: 300px;
    height: 300px;
  }
}
`
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

export const List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 2.5rem 0;
  animation: ${fadeInUp} 0.6s ease-out;

  @media ${props => props.theme.breakpoints.md} {
    gap: 1.5rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
    gap: 1.2rem;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.sm} {
    margin-left: 0;
  }
`;

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.accent1};
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  transition: color 0.2s ease;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.45rem;
  }
`;

export const ListParagraph = styled.p`
  font-size: 1.45rem;
  line-height: 1.6;
  color: ${props => props.theme.colors.textSecondary};
  transition: color 0.2s ease;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.35rem;
  }
`;

export const ListItem = styled.li.attrs(props => ({
  style: {
    animationDelay: `${(props.index || 0) * 0.08}s`
  }
}))`
  max-width: 320px;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: 2px solid ${props => props.theme.colors.background2};
  background: ${props => props.theme.colors.background1};
  transition: all 0.2s ease;
  animation: ${fadeInUp} 0.5s ease-out both;

  svg {
    color: ${props => props.theme.colors.accent1};
    margin-bottom: 0.8rem;
    transition: color 0.2s ease;
  }

  &:hover {
    border-color: ${props => props.theme.colors.accent1};
    svg {
      color: ${props => props.theme.colors.text};
    }
  }

  @media ${props => props.theme.breakpoints.sm} {
    max-width: 100%;
    flex-direction: row;
    align-items: flex-start;
    gap: 1rem;

    svg {
      margin-bottom: 0;
      flex-shrink: 0;
    }
  }
`;

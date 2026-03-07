import styled from 'styled-components';

export const FooterWrapper = styled.section`
  width: 100%;
  max-width: 1040px;
  padding: 2.5rem 0 3rem;
  margin: 0 auto;
  box-sizing: border-box;

  @media ${props => props.theme.breakpoints.sm} {
    padding: 2rem 0 2.5rem;
  }
`;

export const LinkItem = styled.a`
  font-size: 1.5rem;
  line-height: 1.6;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 0.5rem;
  transition: all 0.2s ease;
  border-bottom: 2px solid transparent;

  &:hover {
    color: ${props => props.theme.colors.accent1};
    border-bottom-color: ${props => props.theme.colors.accent1};
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.35rem;
  }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media ${props => props.theme.breakpoints.sm} {
    flex-direction: column;
    align-items: center;
  }
`;

export const CompanyContainer = styled.div`
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;

  @media ${props => props.theme.breakpoints.sm} {
    justify-content: center;
    text-align: center;
  }
`;

export const Slogan = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1.45rem;
  line-height: 1.5;
  letter-spacing: 0.01em;
  max-width: 360px;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.3rem;
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LinkList = styled.ul`
  border-top: 2px solid ${props => props.theme.colors.background2};
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  gap: 2rem;
  padding: 2rem 0 0;

  @media ${props => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.5rem 0 0;
    text-align: center;
  }
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: 0.8rem;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1rem;
  }
`;

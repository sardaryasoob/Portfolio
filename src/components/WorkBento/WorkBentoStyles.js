import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Section = styled.section`
  padding: 80px 24px;
  background: ${p => p.theme.colors.background1};

  @media (max-width: 768px) {
    padding: 56px 20px;
  }
`;

export const Title = styled.h2`
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${p => p.theme.colors.text};
  margin-bottom: 48px;
  text-align: center;
  animation: ${fadeUp} 0.6s ease-out;
`;

export const Grid = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 20px;
  grid-template-areas:
    "big big"
    "small1 small2";

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "big"
      "small1"
      "small2";
    gap: 16px;
  }
`;

export const Card = styled.a.attrs(props => ({
  style: { animationDelay: `${(props.$index || 0) * 0.1}s` },
}))`
  display: block;
  position: relative;
  overflow: hidden;
  background: ${p => p.theme.colors.background2};
  border: 1px solid ${p => p.theme.colors.background3};
  transition: border-color 0.2s, transform 0.2s;
  animation: ${fadeUp} 0.6s ease-out both;
  text-decoration: none;
  color: inherit;

  grid-area: ${p => (p.$big ? 'big' : p.$area || 'small1')};

  &:hover {
    border-color: ${p => p.theme.colors.accent1};
    transform: translateY(-4px);
  }

  &:hover .work-img {
    transform: scale(1.05);
  }
`;

export const ImgWrap = styled.div`
  width: 100%;
  height: ${p => (p.$big ? 280 : 160)}px;
  overflow: hidden;
  background: ${p => p.theme.colors.background3};
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
`;

export const Content = styled.div`
  padding: 20px;
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${p => p.theme.colors.text};
  margin-bottom: 6px;
`;

export const CardLine = styled.p`
  font-size: 1.35rem;
  color: ${p => p.theme.colors.textSecondary};
  line-height: 1.4;
  margin-bottom: 12px;
`;

export const CardLink = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${p => p.theme.colors.accent1};
  transition: color 0.2s;

  ${Card}:hover & {
    color: ${p => p.theme.colors.accent2};
  }
`;

export const AllLink = styled.a`
  display: block;
  text-align: center;
  margin-top: 32px;
  font-size: 1.45rem;
  font-weight: 600;
  color: ${p => p.theme.colors.textSecondary};
  transition: color 0.2s;

  &:hover {
    color: ${p => p.theme.colors.accent1};
  }
`;

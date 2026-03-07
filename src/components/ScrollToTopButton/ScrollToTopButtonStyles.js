import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const ScrollToTopButtonStyled = styled.button`
  position: fixed;
  bottom: 24px;
  right: 24px;
  background: ${(props) => props.theme.colors.accent1};
  color: ${(props) => props.theme.colors.background1};
  border: 2px solid ${(props) => props.theme.colors.accent1};
  width: 48px;
  height: 48px;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  z-index: 999;
  transition: all 0.2s ease;
  animation: ${fadeIn} 0.3s ease-out;

  &:hover {
    background: transparent;
    color: ${(props) => props.theme.colors.accent1};
  }

  &:active {
    transform: scale(0.96);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 44px;
    height: 44px;
    bottom: 20px;
    right: 20px;
    font-size: 1.5rem;
  }
`;

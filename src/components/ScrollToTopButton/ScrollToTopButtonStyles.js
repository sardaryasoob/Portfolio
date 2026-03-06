import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const ScrollToTopButtonStyled = styled.button`
  position: fixed;
  bottom: 28px;
  right: 28px;
  background: ${(props) => props.theme.colors.gradient1};
  color: ${(props) => props.theme.colors.text};
  border: none;
  border-radius: 50%;
  width: 52px;
  height: 52px;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  z-index: 999;
  box-shadow: 0 4px 20px ${(props) => props.theme.colors.glow};
  transition: all 0.35s ease;
  animation: ${fadeIn} 0.3s ease-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 28px ${(props) => props.theme.colors.glow};
  }

  &:active {
    transform: translateY(-2px);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 46px;
    height: 46px;
    bottom: 20px;
    right: 20px;
    font-size: 1.6rem;
  }
`;

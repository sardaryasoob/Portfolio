import React from 'react';
import styled from 'styled-components';

const SvgWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  height: 400px;
  opacity: 0.4;
  color: ${(props) => props.theme.colors.accent1};

  .line {
    stroke: currentColor;
    stroke-width: 0.5;
    fill: none;
  }
  .dot {
    fill: currentColor;
    opacity: 0.6;
  }
`;

const BackgroundAnimation = () => (
  <SvgWrapper>
    <svg
      className="BgAnimation__svg"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Grid */}
      {Array.from({ length: 11 }).map((_, i) => (
        <line
          key={`h-${i}`}
          className="line"
          x1={0}
          y1={i * 40}
          x2={400}
          y2={i * 40}
        />
      ))}
      {Array.from({ length: 11 }).map((_, i) => (
        <line
          key={`v-${i}`}
          className="line"
          x1={i * 40}
          y1={0}
          x2={i * 40}
          y2={400}
        />
      ))}
      {/* Diagonal accent lines */}
      <line className="line" x1={0} y1={0} x2={400} y2={400} opacity="0.3" />
      <line className="line" x1={400} y1={0} x2={0} y2={400} opacity="0.3" />
      <line className="line" x1={200} y1={0} x2={200} y2={400} opacity="0.2" />
      <line className="line" x1={0} y1={200} x2={400} y2={200} opacity="0.2" />
      {/* Corner dots */}
      <circle className="dot" cx={40} cy={40} r="3" />
      <circle className="dot" cx={360} cy={40} r="3" />
      <circle className="dot" cx={40} cy={360} r="3" />
      <circle className="dot" cx={360} cy={360} r="3" />
      <circle className="dot" cx={200} cy={200} r="2" />
    </svg>
  </SvgWrapper>
);

export default BackgroundAnimation;

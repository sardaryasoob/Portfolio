import React from 'react';
import { Section, Inner, Bio, Stats, Stat, StatNum, StatLabel } from './IntroBlockStyles';

const introText = 'Highly skilled Senior Software Engineer with 4+ years building modern web applications. Expert in Angular, React, Node.js, and full-stack development. Passionate about scalable solutions and clean architecture.';

const stats = [
  { number: '4+', label: 'Years experience' },
  { number: '15+', label: 'Projects delivered' },
  { number: '3', label: 'Companies & clients' },
  { number: '100%', label: 'Focused on quality' },
];

const IntroBlock = () => (
  <Section>
    <Inner>
      <Bio>{introText}</Bio>
      <Stats>
        {stats.map((s, i) => (
          <Stat key={i}>
            <StatNum>{s.number}</StatNum>
            <StatLabel>{s.label}</StatLabel>
          </Stat>
        ))}
      </Stats>
    </Inner>
  </Section>
);

export default IntroBlock;

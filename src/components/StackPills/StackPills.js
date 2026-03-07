import React from 'react';
import { skills } from '../../constants/constants';
import { Section, Title, Sub, PillsWrap, Pill } from './StackPillsStyles';

const allSkills = [
  ...skills.frontend,
  ...skills.backend,
  ...skills.fullstack,
  ...skills.other,
];

const StackPills = () => (
  <Section id="stack">
    <Title>What I use</Title>
    <Sub>Frontend, backend, and tools I work with every day.</Sub>
    <PillsWrap>
      {allSkills.map((s, i) => (
        <Pill key={i}>{s}</Pill>
      ))}
    </PillsWrap>
  </Section>
);

export default StackPills;

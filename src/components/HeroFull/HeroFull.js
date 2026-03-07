import React from 'react';
import { Section, Name, Role, Tagline, Cta } from './HeroFullStyles';

const HeroFull = () => (
  <Section id="hero">
    <Name>Sardar Yasoob</Name>
    <Role>Senior Software Engineer</Role>
    <Tagline>
      I build scalable web applications with Angular, React & Node.js — from ERP systems to real-time dashboards and e‑commerce.
    </Tagline>
    <Cta
      href="https://www.linkedin.com/in/sardar-yasoob/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Let&apos;s connect
    </Cta>
  </Section>
);

export default HeroFull;

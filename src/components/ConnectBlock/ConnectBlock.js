import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { Section, Title, Sub, Links, LinkCard } from './ConnectBlockStyles';

const ConnectBlock = () => (
  <Section id="connect">
    <Title>Let&apos;s connect</Title>
    <Sub>Open to new opportunities and conversations.</Sub>
    <Links>
      <LinkCard href="mailto:sardaryasoob88@gmail.com">
        sardaryasoob88@gmail.com
      </LinkCard>
      <LinkCard href="tel:+923180476560">+92 318 0476560</LinkCard>
      <LinkCard
        href="https://www.linkedin.com/in/sardar-yasoob/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin size="1.8rem" /> LinkedIn
      </LinkCard>
    </Links>
  </Section>
);

export default ConnectBlock;

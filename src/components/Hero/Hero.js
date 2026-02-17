import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection, HeroContainer, GradientText, ContactInfo, ContactItem } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <HeroContainer>
      <LeftSection>
        <SectionTitle main center>
          <GradientText>Hi! I'm</GradientText>
          <br />
          <GradientText>Sardar Yasoob</GradientText>
          <br />
          <GradientText>Senior Software Engineer</GradientText>
        </SectionTitle>
        <SectionText>
          Highly skilled Senior Software Engineer with over 4+ years of professional experience
          specializing in modern web application development. Expert in Angular, React, Node.js, and full-stack
          development using MEAN and MERN stacks. Proven track record of delivering scalable,
          high-performance applications with strong expertise in frontend frameworks including Angular
          Material, Kendo UI, PrimeNG, RxJS, and NgRx Store.
        </SectionText>
        <ContactInfo>
          <ContactItem href="tel:+923180476560">+92 318 0476560</ContactItem>
          <ContactItem href="mailto:sardaryasoob88@gmail.com">sardaryasoob88@gmail.com</ContactItem>
          <ContactItem href="https://www.linkedin.com/in/sardar-yasoob/" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </ContactItem>
        </ContactInfo>
        <Button
          onClick={() => {
            window.open("https://www.linkedin.com/in/sardar-yasoob/", "_blank");
          }}
        >
          Connect with Me
        </Button>
      </LeftSection>
    </HeroContainer>
  </Section>
);

export default Hero;

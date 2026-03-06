import React from "react";
import {
  Section,
  SectionText,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import {
  LeftSection,
  HeroContainer,
  GradientText,
  Greeting,
  Tagline,
  ContactInfo,
  ContactItem,
  CTAWrapper,
} from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <HeroContainer>
      <LeftSection>
        <Greeting>Hey, I'm</Greeting>
        <GradientText className="name">Sardar Yasoob</GradientText>
        <GradientText className="role">Senior Software Engineer</GradientText>
        <Tagline>
          I build scalable web applications with Angular, React & Node.js. 
          4+ years turning ideas into high-performance products — from ERP systems 
          to real-time dashboards and e‑commerce platforms.
        </Tagline>
        <ContactInfo>
          <ContactItem href="tel:+923180476560">+92 318 0476560</ContactItem>
          <ContactItem href="mailto:sardaryasoob88@gmail.com">sardaryasoob88@gmail.com</ContactItem>
          <ContactItem href="https://www.linkedin.com/in/sardar-yasoob/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </ContactItem>
        </ContactInfo>
        <CTAWrapper>
          <Button
            onClick={() => {
              window.open("https://www.linkedin.com/in/sardar-yasoob/", "_blank");
            }}
          >
            Let's connect
          </Button>
        </CTAWrapper>
      </LeftSection>
    </HeroContainer>
  </Section>
);

export default Hero;

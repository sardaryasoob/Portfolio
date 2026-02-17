import React from "react";
import { DiFirebase, DiReact, DiNodejsSmall, DiMongodb } from "react-icons/di";
import { SiAngular, SiExpress, SiNgrx } from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
import { skills } from "../../constants/constants";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technical Skills</SectionTitle>
    <SectionText>
      I have worked with a comprehensive range of technologies in web development,
      specializing in modern frontend frameworks, backend technologies, and full-stack solutions.
    </SectionText>
    <List>
      <ListItem index={0}>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Frontend Frameworks</ListTitle>
          <ListParagraph>
            {skills.frontend.join(", ")}
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem index={1}>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Backend Technologies</ListTitle>
          <ListParagraph>
            {skills.backend.join(", ")}
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem index={2}>
        <DiNodejsSmall size="3rem" />
        <ListContainer>
          <ListTitle>Full Stack</ListTitle>
          <ListParagraph>
            {skills.fullstack.join(", ")}
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem index={3}>
        <DiMongodb size="3rem" />
        <ListContainer>
          <ListTitle>Other Skills</ListTitle>
          <ListParagraph>
            {skills.other.join(", ")}
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;

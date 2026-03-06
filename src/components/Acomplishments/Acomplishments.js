import React from "react";
import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: "4+", text: "Years of experience" },
  { number: "15+", text: "Projects delivered" },
  { number: "3", text: "Companies & clients" },
  { number: "100%", text: "Focused on quality" },
];

const Acomplishments = () => (
  <Section id="accomplishments">
    <SectionDivider />
    <SectionTitle>About my journey</SectionTitle>
    <SectionText>
      From freelancing to leading development at IQC Solutions — building products that scale and teams that deliver.
    </SectionText>
    <Boxes>
      {data.map((item, i) => (
        <Box key={i} index={i}>
          <BoxNum index={i}>{item.number}</BoxNum>
          <BoxText>{item.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;

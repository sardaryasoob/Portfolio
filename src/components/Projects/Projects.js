import React from "react";

import {
  BlogCard,
  CardInfo,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  Img,
  ImgContainer,
  ProjectNumber,
  CardOverlay,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { myProjects, projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Featured Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i} index={i} color={p.color}>
            <ProjectNumber color={p.color}>0{i + 1}</ProjectNumber>
            <ImgContainer>
              <Img src={p.image} alt={p.title} />
              <CardOverlay color={p.color} />
            </ImgContainer>
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <br></br>
              <TitleContent>Tech Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i} index={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Projects;

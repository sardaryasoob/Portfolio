import React from 'react';
import Link from 'next/link';
import { projects } from '../../constants/constants';
import { Section, Title, Grid, Card, ImgWrap, Img, Content, CardTitle, CardLine, CardLink, AllLink } from './WorkBentoStyles';

const WorkBento = () => {
  const [first, second, third, ...rest] = projects;
  const display = [first, second, third].filter(Boolean);

  return (
    <Section id="work">
      <Title>Selected work</Title>
      <Grid>
        {display.map((p, i) => (
          <Card
            key={p.id}
            href={p.visit || p.source || '#'}
            target="_blank"
            rel="noopener noreferrer"
            $big={i === 0}
            $area={i === 1 ? 'small1' : 'small2'}
            $index={i}
          >
            <ImgWrap $big={i === 0}>
              <Img src={p.image} alt={p.title} className="work-img" />
            </ImgWrap>
            <Content>
              <CardTitle>{p.title}</CardTitle>
              <CardLine>{p.description.slice(0, 80)}…</CardLine>
              <CardLink>View project →</CardLink>
            </Content>
          </Card>
        ))}
      </Grid>
      <Link href="/projects" passHref><AllLink>View all projects →</AllLink></Link>
    </Section>
  );
};

export default WorkBento;

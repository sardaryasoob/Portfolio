import React from 'react';
import { TimeLineData } from '../../constants/constants';
import { Section, Title, Timeline, Item, Year, Text } from './JourneyTimelineStyles';

const JourneyTimeline = () => (
  <Section id="journey">
    <Title>Where I&apos;ve been</Title>
    <Timeline>
      {TimeLineData.map((item, i) => (
        <Item key={item.year} $index={i}>
          <Year>{item.year}</Year>
          <Text>{item.text}</Text>
        </Item>
      ))}
    </Timeline>
  </Section>
);

export default JourneyTimeline;

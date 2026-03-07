import React from 'react';
import { Layout } from '../layout/Layout';
import HeroFull from '../components/HeroFull/HeroFull';
import IntroBlock from '../components/IntroBlock/IntroBlock';
import WorkBento from '../components/WorkBento/WorkBento';
import StackPills from '../components/StackPills/StackPills';
import JourneyTimeline from '../components/JourneyTimeline/JourneyTimeline';
import ConnectBlock from '../components/ConnectBlock/ConnectBlock';
import ScrollToTopButton from '../components/ScrollToTopButton/ScrollToTopButton';

const Home = () => (
  <Layout>
    <ScrollToTopButton />
    <HeroFull />
    <IntroBlock />
    <WorkBento />
    <StackPills />
    <JourneyTimeline />
    <ConnectBlock />
  </Layout>
);

export default Home;

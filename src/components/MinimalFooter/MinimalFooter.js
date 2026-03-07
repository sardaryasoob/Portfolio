import React from 'react';
import { Foot, Text } from './MinimalFooterStyles';

const MinimalFooter = () => (
  <Foot>
    <Text>© {new Date().getFullYear()} Sardar Yasoob · Built with Next.js</Text>
  </Foot>
);

export default MinimalFooter;

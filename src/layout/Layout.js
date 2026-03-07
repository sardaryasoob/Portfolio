import React from 'react';
import TopBar from '../components/TopBar/TopBar';
import MinimalFooter from '../components/MinimalFooter/MinimalFooter';

export const Layout = ({ children }) => (
  <>
    <TopBar />
    <main>{children}</main>
    <MinimalFooter />
  </>
);

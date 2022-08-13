import React from 'react';
import Navigation from './components/Navigation';
import { LayoutSC } from './Layout.styled';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutSC>
      <Navigation />
      <main>{children}</main>
    </LayoutSC>
  );
};

export default Layout;

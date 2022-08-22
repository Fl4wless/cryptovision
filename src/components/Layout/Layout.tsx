import React from 'react';
import Navigation from './components/Navigation';
import { LayoutSC } from './Layout.styled';

interface LayoutProps {
  children: React.ReactNode;
  toggleTheme: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, toggleTheme }) => {
  return (
    <LayoutSC>
      <Navigation toggleTheme={toggleTheme} />
      <main>{children}</main>
    </LayoutSC>
  );
};

export default Layout;

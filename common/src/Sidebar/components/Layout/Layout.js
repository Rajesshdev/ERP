import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { SLayout, SMain } from './styles';

const Layout = ({ children }) => {
  return (
    <SLayout>
      <Sidebar />
    </SLayout>
  );
};

export default Layout;

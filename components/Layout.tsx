import Navbar from './Navbar';
import Footer from './Footer';
import React from 'react';

const Layout = ({ children }: { children: any }) => {
  return (
    <div className="h-full flex flex-col">
      <Navbar />
      <main className="flex flex-col flex-auto">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;

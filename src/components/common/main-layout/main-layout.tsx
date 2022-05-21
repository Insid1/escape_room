import { Header, Footer } from 'components/common/common';
import React from 'react';

function MainLayout({ children }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;

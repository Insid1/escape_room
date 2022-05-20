import { Header, Footer } from 'components/common/common';

function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;

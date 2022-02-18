import { Header, Footer } from '@/components';
import { ReactNode } from 'react';
import * as Styled from './Layout.styled';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Styled.Layout>{children}</Styled.Layout>
      <Footer />
    </>
  );
};

export default Layout;

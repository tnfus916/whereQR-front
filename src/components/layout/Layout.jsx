import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import NavigationBar from './NavigationBar';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

function Layout() {
  return (
    <>
      <LayoutContainer>
        <Header />
        <Outlet />
        <NavigationBar />
      </LayoutContainer>
    </>
  );
}

export default Layout;

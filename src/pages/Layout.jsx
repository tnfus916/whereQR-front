import styled from 'styled-components';
import { Outlet, useMatch } from 'react-router-dom';

import Header from '../components/layout/Header';
import NavigationBar from '../components/layout/NavigationBar';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const OutletContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90%;
  width: 100%;
  margin-top: 50px;
  overflow-y: auto;
`;

export const ChatOutletContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80%;
  width: 100%;
  margin-top: 50px;
  overflow-y: auto;
`;

function Layout() {
  const isChat = useMatch('/chatroom/:id');
  console.log(isChat);

  return (
    <>
      { !isChat ? (
        <LayoutContainer>
          <Header />
          <OutletContainer>
            <Outlet />
          </OutletContainer>
          <NavigationBar />
        </LayoutContainer>
      ) : (
        <LayoutContainer>
          <Header />
          <ChatOutletContainer>
            <Outlet />
          </ChatOutletContainer>
          <NavigationBar />
        </LayoutContainer>
      ) }
    </>
  );
}

export default Layout;

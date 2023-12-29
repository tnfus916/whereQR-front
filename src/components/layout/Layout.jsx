import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { LayoutContainer } from "./LayoutStyle";
import NavigationBar from './NavigationBar';

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

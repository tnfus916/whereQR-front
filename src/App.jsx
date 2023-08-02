import { useState } from "react";
import GlobalStyle from "../GlobalStyle";
import Router from "../Router";
// import { ThemeProvider } from "styled-components";
// import { Context } from "./Context";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <>
      {/* <ThemeProvider>
        <Context.Provider value={{}}>
          <Layout />
        </Context.Provider>
      </ThemeProvider> */}
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;

import GlobalStyle from "../GlobalStyle";
import Router from "../Router";
import { AppProvider } from "./AppContext";
// import { ThemeProvider } from "styled-components";
// import { Context } from "./Context";
import Layout from "./components/layout/Layout";
import "./assets/fonts.css";

function App() {
  return (
    <>
      {/* <ThemeProvider>
        <Context.Provider value={{}}>
          <Layout />
        </Context.Provider>
      </ThemeProvider> */}
      <AppProvider>
        <GlobalStyle />
        <Router />
      </AppProvider>
    </>
  );
}

export default App;

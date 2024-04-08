import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyle from '../GlobalStyle';
import Router from '../Router';
// import { ThemeProvider } from "styled-components";
import './assets/fonts.css';
import { ReactQueryDevtools } from 'react-query/devtools';

const client = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={ client }>
        <GlobalStyle />
        <Router />
        <ReactQueryDevtools initialIsOpen={ true } />
      </QueryClientProvider>
    </>
  );
}

export default App;

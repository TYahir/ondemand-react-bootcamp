import { createContext, useState } from 'react';
import { normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components';
import Layout from './components/Layout';
import { routes } from './utils/constants';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Nunito Sans', sans-serif;
  }
`

export const RouteContext = createContext();

function App() {
  const [route, setRoute] = useState(routes.HOME);

  return (
    <>
      <GlobalStyle />
      <RouteContext.Provider value={[route, setRoute]}>
        <Layout />
      </RouteContext.Provider>  
    </>
  );
}

export default App;

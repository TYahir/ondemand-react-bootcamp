import { createContext, useState } from 'react';
import { GlobalStyle } from './App.styled';
import Layout from './components/Layout';
import { routes } from './utils/constants';

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

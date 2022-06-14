
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import { useFeaturedBanners } from './utils/hooks/useFeaturedBanners';
import Layout from './components/Layout';

const GlobalStyle = createGlobalStyle`
  ${reset}

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

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <>
      <GlobalStyle />
      <Layout />
    </>
  );
}

export default App;

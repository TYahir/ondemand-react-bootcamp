import { useContext } from 'react';
import styled from 'styled-components';
import { RouteContext } from '../../App';
import { routes } from '../../utils/constants';
import Home from '../pages/Home';
import ProductList from '../pages/ProductList';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';

const StyledLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-gap: 1em;
    width: 100%;
    min-height: 100vh;
    padding: 1em;
    max-width: 1200px;
    margin: 0 auto;
`;

function Layout() {
    const [route] = useContext(RouteContext);
    
    return (
        <StyledLayout>
           <Header />
           <Content>
                {route === routes.HOME && <Home /> }
                {route === routes.PRODUCTS && <ProductList /> }
           </Content>
           <Footer />
        </StyledLayout>
    );
}

export default Layout;
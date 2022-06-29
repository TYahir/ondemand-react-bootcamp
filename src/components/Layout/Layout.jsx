import { useContext } from 'react';
import { RouteContext } from '../../App';
import { routes } from '../../utils/constants';
import Home from '../pages/Home';
import ProductList from '../pages/ProductList';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { StyledLayout } from './Layout.styled';

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
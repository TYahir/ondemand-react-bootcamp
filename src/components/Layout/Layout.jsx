import styled from 'styled-components';
import Home from '../pages/Home';
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
    return (
        <StyledLayout>
           <Header />
           <Content>
                <Home />
           </Content>
           <Footer />
        </StyledLayout>
    );
}

export default Layout;
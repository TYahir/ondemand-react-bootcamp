import styled from 'styled-components';
import { IoStorefrontOutline } from "react-icons/io5";
import SearchField from '../../shared/SearchField';
import Cart from '../../Cart/Cart';
import { useContext } from 'react';
import { RouteContext } from '../../../App';
import { routes } from '../../../utils/constants';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em;
    top: 0;
    background-color: white;
    z-index: 2;
    position: sticky;
`;

const Logo = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5em;
    background-color: transparent;
    outline: 0 none;
    border: 0 none;
    cursor: pointer;
    &:hover {
        svg, h1 {
            color: slateblue;
        }
    }

    svg, h1 {
        transition: color 200ms ease-in-out;
    }

    svg {
        font-size: 2em;
    }

    h1 {
        font-size: 12px;
        margin: 0;
    }
`;

function Header() {
    const [, setRoute] = useContext(RouteContext);

    return (
        <StyledHeader>
            <Logo onClick={() => setRoute(routes.HOME)}>
                <IoStorefrontOutline />
               <h1>The WizeStore</h1>
            </Logo>
            <SearchField />
            <Cart />
        </StyledHeader>
        
     );
}

export default Header;
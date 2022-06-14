import styled from 'styled-components';
import { IoStorefrontOutline } from "react-icons/io5";
import SearchInput from '../../shared/SearchInput';
import Cart from '../../Cart/Cart';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em;
`;

const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5em;

    svg {
        font-size: 2em;
    }

    h1 {
        font-size: 12px;
    }
`;

function Header() {
    return (
        <StyledHeader>
            <Logo>
                <IoStorefrontOutline />
               <h1>The WizeStore</h1>
            </Logo>
            <SearchInput />
            <Cart />
        </StyledHeader>
        
     );
}

export default Header;
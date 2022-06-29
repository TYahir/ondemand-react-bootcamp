import SearchField from '../../shared/SearchField';
import { StyledHeader } from "./Header.styled";
import Cart from '../../Cart/Cart';
import Logo from './Logo';

function Header() {

    return (
        <StyledHeader>
            <Logo />
            <SearchField />
            <Cart />
        </StyledHeader>
        
     );
}

export default Header;
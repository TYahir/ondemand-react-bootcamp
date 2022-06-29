
import { useContext } from 'react';
import { IoStorefrontOutline } from "react-icons/io5";
import { RouteContext } from '../../../../App';
import { routes } from '../../../../utils/constants';
import { StyledLogo } from './Logo.styled';

function Logo() {
    const [, setRoute] = useContext(RouteContext);

    return ( 
        <StyledLogo onClick={() => setRoute(routes.HOME)}>
            <IoStorefrontOutline />
            <h1>The WizeStore</h1>
        </StyledLogo>
     );
}

export default Logo;
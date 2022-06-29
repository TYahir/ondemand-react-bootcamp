import { StyledLink } from "./ThemedLink.styled";
import PropTypes from 'prop-types';

function ThemedLink({ href, target='_self', className='', children, ...props }) {
    return ( 
        <StyledLink
                href={href}
                target={target}
                className={className}
                {...props}
        >
            {children}
        </StyledLink>
    );
}

ThemedLink.propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
}

export default ThemedLink;
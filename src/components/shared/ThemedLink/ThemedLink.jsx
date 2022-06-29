import { StyledLink } from "./ThemedLink.styled";

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

export default ThemedLink;
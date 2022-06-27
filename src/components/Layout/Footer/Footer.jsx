import styled from 'styled-components';

const StyledFooter = styled.footer`
    text-align: center;
    font-size: 12px;
    padding: 2em 1em 0;
`;

function Footer() {
    return ( 
        <StyledFooter>
            Ecommerce created during Wizeline’s Academy React Bootcamp
        </StyledFooter>
    );
}

export default Footer;
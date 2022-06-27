import styled from 'styled-components';

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 20px;
    justify-content: center;
`;

function Grid({ children }) {
    return ( 
        <StyledGrid>
            {children}
        </StyledGrid>
     );
}

export default Grid;<div>Grid</div>
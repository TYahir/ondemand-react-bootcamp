import styled from "styled-components";

const StyledNavigation = styled.nav`
    display: flex;
    flex-direction: row;
    gap: .5em;
    place-self: center;
    grid-column-start: 1;
    grid-column-end: -1;
`;

const PaginationButton = styled.button`
    outline: 0 none;
    border: 0 none;
    background-color: ${ props => props.isActive ? 'ghostwhite' : 'transparent' };
    color: ${ props => props.isActive ? 'slateblue' : 'black' };
    font-weight: ${ props => props.isActive ? 'bold' : 'normal' };
    cursor: pointer;
    padding: .5em 1em;
    transition: background-color 200ms ease-in-out, color 200ms ease-in-out;
    &:hover {
        background-color: ghostwhite;
        color: slateblue;
    }
`;

function Pagination({
        pageCount,
        activeIndex = 0,
        prevLabel = '<',
        nextLabel = '>',
        firstLabel = '<<',
        lastLabel = '>>',
    }) {
    return ( 
        <StyledNavigation>
           { activeIndex > 2 && <PaginationButton>{firstLabel}</PaginationButton> }
           { activeIndex > 1 && <PaginationButton>{prevLabel}</PaginationButton> }
            
            {[...Array(pageCount)].map((x, i) =>
                <PaginationButton key={i} isActive={i === activeIndex}>{i + 1}</PaginationButton>
            )}
            
            { activeIndex < pageCount && <PaginationButton>{nextLabel}</PaginationButton> }
            { activeIndex < pageCount - 1 && <PaginationButton>{lastLabel}</PaginationButton> }
        </StyledNavigation>
    );
}

export default Pagination;
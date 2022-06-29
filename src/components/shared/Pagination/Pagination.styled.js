import styled from "styled-components";

export const StyledNavigation = styled.nav`
    display: flex;
    flex-direction: row;
    gap: .5em;
    place-self: center;
    grid-column-start: 1;
    grid-column-end: -1;
`;

export const PaginationButton = styled.button`
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

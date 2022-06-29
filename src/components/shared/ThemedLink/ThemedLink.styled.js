import styled from "styled-components";

export const StyledLink = styled.a`
    color: black;
    transition: color 200ms ease-in-out;
    position: relative;
    background-color: transparent;
    outline: 0 none;
    border: 0 none;
    cursor: pointer;
    &:focus, &:hover {
        color: slateblue;
    }
    &:active {
        color: midnightblue;
    }
`;

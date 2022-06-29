import styled from "styled-components";

export const StyledLogo = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5em;
    background-color: transparent;
    outline: 0 none;
    border: 0 none;
    cursor: pointer;
    &:hover {
        svg, h1 {
            color: slateblue;
        }
    }

    svg, h1 {
        transition: color 200ms ease-in-out;
    }

    svg {
        font-size: 2em;
    }

    h1 {
        font-size: 12px;
        margin: 0;
    }
`;

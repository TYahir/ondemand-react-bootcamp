import styled from 'styled-components';

export const StyledTextField = styled.input`
    border: 0 none;
    border-radius: 25px;
    padding: .5em 1em;
    border: 2px solid black;
    width: 100%;
    transition: 200ms;

    &:focus, &:active {
        outline: 2px solid black;
    }

    ::placeholder {
        color: black;
    }
`;

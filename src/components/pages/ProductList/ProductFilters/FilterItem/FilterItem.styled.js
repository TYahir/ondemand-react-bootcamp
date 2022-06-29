import styled from "styled-components";

export const StyledFilterItem = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    flex-grow: 0;
    justify-content: space-between;
    max-width: 250px;
    width: 100%;
    align-items: center;

    input[type="checkbox"] {
        margin-left: 1em;
    }
`;

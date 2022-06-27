import styled from "styled-components";
import { device } from "../../../../theme/breakpoints";

const StyledFilters = styled.aside`
    padding: 1em;
    position: relative;
    border-right: 0 none;
    flex-grow: 1;
    width: 100%;
    border-bottom: 1px solid black;
    
    @media ${device.tablet} {
        flex-basis: 250px;
        flex-grow: 0;
        border-right: 1px solid black;
        border-bottom: unset;
    }
`;

const FiltersContainer = styled.div`
    position: sticky;
    top: 5em;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: stretch;

    h2 {
        margin-top: .3em;
        cursor: pointer;

        svg {
            margin-left: 5px;
            transition: transform 200ms ease-in-out;
            transform: ${props => props.showFilters ? "translateY(5px) rotate(180deg)" : "translateY(5px) rotate(0deg)"};
        }
    }

    h2, h3 {
        align-self: flex-start;
    }

    button {
        max-width: 100%;
    }

    .filters {
        display: ${props => props.showFilters ? "block" : "none"};
    }

    @media ${device.tablet} {
        h2 svg {
            display: none;
        }
    }
`;

const StyledFilterItem = styled.div`
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

export { StyledFilters, StyledFilterItem, FiltersContainer };
import styled from 'styled-components';

export const StyledCategoryItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    position: relative;
    cursor: pointer;
    &:hover {
        .category-image img {
            transform: scale(1.1);
            transform-origin: center center;
        }

        h3 {
            color: slateblue;
            background-color: ghostwhite;
        }
    }

    h3 {
        z-index: 1;
        background-color: white;
        color: black;
        padding: .5em 1em;
        transition: color 200ms ease-in-out, background-color 200ms ease-in-out;
    }

    .category-image {
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
            transition: transform 200ms ease-in-out;
        }
    }
`;

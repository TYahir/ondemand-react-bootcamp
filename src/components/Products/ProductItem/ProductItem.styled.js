import styled from 'styled-components';

export const StyledProductItem = styled.div`
    display: flex;
    flex-direction: column;
    transition: background-color 200ms ease-in-out;
    background-color: white;
    cursor: pointer;
    padding: 1em;
    &:hover {
        background-color: ghostwhite;
        .product-image img {
            transform: scale(1.1);
            transform-origin: center center;
        }

        .product-details {
            h3 {
                color: slateblue;
            }
        }
    }

    .product-image {
        width: 100%;
        height: 180px;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            transition: transform 200ms ease-in-out; 
            mix-blend-mode: darken;
        }
    }

    .product-details {
        margin: 0 auto;
        max-width: 80%;

        h3 {
            margin-bottom: .5em;
            word-break: break-word;
            transition: color 200ms ease-in-out;
            max-width: 10em;
        }

        .product-price {
            color: slategray;
            margin: 0;
        }

        .product-tags {
            padding: .5em 0;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-start;
            gap: .5em;
            .product-tag {
                background-color: black;
                color: white;
                padding: .5em;
                transition: background-color 200ms ease-in-out;
                &:hover {
                    background-color: slateblue;
                }
            }
        }
    }
`;

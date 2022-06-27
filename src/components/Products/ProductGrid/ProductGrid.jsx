import { useContext, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { RouteContext } from "../../../App";
import { routes } from "../../../utils/constants";
import Grid from "../../shared/Grid";
import Pagination from "../../shared/Pagination";
import ThemedLink from "../../shared/ThemedLink";
import ProductItem from "../ProductItem";

const StyledProductGrid = styled.div`
    flex-grow: 1;
`;

function ProductGrid({ title, filters = [], products = [], ...props }) {
    const [ route, setRoute ] = useContext(RouteContext);

    // for the deliverable 2 bonus
    const [ bonusLoading, setBonusLoading ] = useState(false);

    useEffect(() => {
        setBonusLoading(true);
        setTimeout(() => {
            setBonusLoading(false);
        }, 2000);
    }, []);

    const filteredProducts = useMemo(() => {
        let filteredList = [];
        if (filters.length === 0) {
            filteredList = [...products];
        } else {
            // Filters by any field
            filteredList = products.filter((product) => {
                let hasFilter = false;
                for(let i = 0; i < filters.length; i++) {
                    hasFilter = product.data[filters[i].type].id === filters[i].id;
                    if (hasFilter) break;
                };
                return hasFilter;
            });
        }
        return [ ...filteredList ]
    }, [filters, products]);

    return ( 
        <StyledProductGrid {...props}>
            <h2>{title}</h2>
            {
            bonusLoading ?
            <span>Loading products ... </span> :
            <Grid>
                { filteredProducts.length ?
                    filteredProducts.map(filteredProduct => <ProductItem product={filteredProduct} key={filteredProduct.id} />) :
                    <h3>No products to show at the moment.</h3>
                }
                {
                    route === routes.PRODUCTS ?
                    <Pagination pageCount={3} /> :
                    <ThemedLink
                        as="button"
                        style={{
                            placeSelf: 'center'
                        }}
                        onClick={() => setRoute(routes.PRODUCTS)}
                    >
                        View all products
                    </ThemedLink>
                }
            </Grid>
            }
        </StyledProductGrid>
    );
}

export default ProductGrid;
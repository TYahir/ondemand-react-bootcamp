

import { useState } from "react";
import styled from "styled-components";
import { useGetFromAPI } from "../../../utils/hooks/useGetFromAPI";
import ProductGrid from "../../Products/ProductGrid";
import ProductFilters from "./ProductFilters";

const StyledProductList = styled.section`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

function ProductList() {
    const [ productsData, productsLoading ] = useGetFromAPI("mocks/en-us/products.json");
    const [ filters, setFilters ] = useState([]);

    return ( 
        <StyledProductList>
            <ProductFilters filters={filters} setFilters={setFilters} />
            {
                productsLoading ? 
                    <span>Loading...</span> :
                    <ProductGrid
                        style={{ padding: "0 1em" }}
                        title="All products"
                        products={productsData?.results}
                        filters={filters}
                    />
            }
        </StyledProductList>
     );
}

export default ProductList;
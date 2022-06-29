

import { useState } from "react";
import { useGetFromAPI } from "../../../utils/hooks/useGetFromAPI";
import ProductGrid from "../../Products/ProductGrid";
import ProductFilters from "./ProductFilters";
import { StyledProductList } from "./ProductList.styled";

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
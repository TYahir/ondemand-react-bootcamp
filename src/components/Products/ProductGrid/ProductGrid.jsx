import { useState, useEffect } from "react";
import { useGetFromAPI } from "../../../utils/hooks/useGetFromAPI";
import Grid from "../../shared/Grid";
import ProductItem from "../ProductItem";

function ProductGrid({ title }) {
    const [ data, loading ] = useGetFromAPI("mocks/en-us/featured-products.json");
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        if (data) {
            setProducts(data.results);
        }
    }, [data]);

    return ( 
        <section>
        <h2>{title}</h2>
            {
                loading ?
                    <span>Loading ...</span> :
                    <Grid>
                        { products.map(product => <ProductItem product={product} key={product.id} />) }
                    </Grid>
            }
        </section>
    );
}

export default ProductGrid;
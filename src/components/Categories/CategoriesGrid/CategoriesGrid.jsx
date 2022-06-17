import { useState, useEffect } from "react";
import { useGetFromAPI } from "../../../utils/hooks/useGetFromAPI";
import Grid from "../../shared/Grid";
import CategoryItem from "../CategoryItem";

function CategoriesGrid({ title }) {

    const [ data, loading ] = useGetFromAPI("mocks/en-us/product-categories.json");
    const [ categories, setCategories ] = useState([]);

    useEffect(() => {
        if (data) {
            setCategories(data.results);
        }
    }, [data]);

    return ( 
        <section>
            <h2>{title}</h2>
            {
                loading ?
                    <span>Loading ...</span> :
                    <Grid>
                        { categories.map(category => <CategoryItem category={category} key={category.id} />) }
                    </Grid>
            }
        </section>
    );
}

export default CategoriesGrid;
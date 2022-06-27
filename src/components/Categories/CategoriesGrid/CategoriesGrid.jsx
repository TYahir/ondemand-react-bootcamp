import { useGetFromAPI } from "../../../utils/hooks/useGetFromAPI";
import Grid from "../../shared/Grid";
import CategoryItem from "../CategoryItem";

function CategoriesGrid({ title }) {

    const [ data, loading ] = useGetFromAPI("mocks/en-us/product-categories.json");

    return ( 
        <section>
            <h2>{title}</h2>
            {
                loading ?
                    <span>Loading ...</span> :
                    <Grid>
                        { data?.results?.map(category => <CategoryItem category={category} key={category.id} />) }
                    </Grid>
            }
        </section>
    );
}

export default CategoriesGrid;
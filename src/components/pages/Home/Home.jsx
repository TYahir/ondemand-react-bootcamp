import { useGetFromAPI } from "../../../utils/hooks/useGetFromAPI";
import CategoriesGrid from "../../Categories/CategoriesGrid";
import ProductGrid from "../../Products/ProductGrid";
import Featured from "./Featured";

function Home() {
    const [ productsData, productsLoading ] = useGetFromAPI("mocks/en-us/featured-products.json");

    return (
        <>
            <Featured />
            <CategoriesGrid title="Categories"/>
            {
                productsLoading ? 
                    <span>Loading...</span> :
                    <ProductGrid
                        title="Featured products"
                        products={productsData?.results}
                        filters={[]}
                    />
            }
        </>
    );
}

export default Home;
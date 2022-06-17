import CategoriesGrid from "../../Categories/CategoriesGrid";
import ProductGrid from "../../Products/ProductGrid";
import Featured from "./Featured";

function Home() {

    return (
        <>
            <Featured />
            <CategoriesGrid title="Categories"/>
            <ProductGrid title="Featured products" />
        </>
    );
}

export default Home;
import { useGetFromAPI } from "../../../../utils/hooks/useGetFromAPI";
import Slider from "../../../shared/Slider";

function Featured() {
    const [ data, loading ] = useGetFromAPI("mocks/en-us/featured-banners.json");

    return (
        <>
            <h2>Featured Products</h2>
            {
                loading ?
                    <div>Loading...</div> :
                    <Slider items={data.results} height="400px" speed={4000}></Slider>
            }
        </>
    );
}

export default Featured;
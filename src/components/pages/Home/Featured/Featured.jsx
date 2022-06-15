import { useFeaturedBanners } from "../../../../utils/hooks/useFeaturedBanners";
import Slider from "../../../shared/Slider";

function Featured() {
    const { data, isLoading } = useFeaturedBanners();

    return (
        <>
            <h2>Featured Products</h2>
            { 
                isLoading ?
                    <div>Loading...</div> :
                    <Slider items={data.results} height="400px" speed={4000}></Slider>
            }
        </>
    );
}

export default Featured;
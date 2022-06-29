import { StyledProductItem } from "./ProductItem.styled";

function ProductItem({ product }) {
    return (
        <StyledProductItem>
            <div className="product-image">
                <img src={product.data.mainimage.url} alt={product.name} />
            </div>
            <div className="product-details">
                <h3>{product.data.name}</h3>
                <p className="product-price">${product.data.price}</p>
                <div className="product-tags">
                    { product.tags.map((tag, index) => <small className="product-tag" key={index}>{tag}</small>) }
                </div>
            </div>
        </StyledProductItem>
    );
}

export default ProductItem;
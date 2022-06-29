import { StyledCategoryItem } from "./CategoryItem.styled";

function CategoryItem({ category, ...props }) {
    return (
        <StyledCategoryItem {...props}>
            <div className="category-image">
                <img src={category.data.main_image.url} alt={category.data.name} />
            </div>
            <h3>{category.data.name}</h3>
        </StyledCategoryItem>
    );
}

export default CategoryItem;
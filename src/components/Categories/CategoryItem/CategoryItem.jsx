import { StyledCategoryItem } from "./CategoryItem.styled";
import PropTypes from 'prop-types';

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

CategoryItem.propTypes = {
    category: PropTypes.object.isRequired,
};

export default CategoryItem;
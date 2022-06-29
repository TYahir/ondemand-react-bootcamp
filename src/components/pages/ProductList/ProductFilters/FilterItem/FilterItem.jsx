import { StyledFilterItem } from "./FilterItem.styled";
import PropTypes from 'prop-types';

function FilterItem({ checked, label, id, handleChange }) {
    return ( 
        <StyledFilterItem>
            <label
                htmlFor={id}
            >
                {label}
            </label>
            <input
                type="checkbox"
                id={id}
                checked={checked}
                name={`filter-${id}`}
                onChange={handleChange}
            />
        </StyledFilterItem>
    );
}

FilterItem.propTypes = {
    checked: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
}

export default FilterItem;
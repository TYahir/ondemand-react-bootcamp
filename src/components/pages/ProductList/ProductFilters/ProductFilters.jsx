import { IoChevronDown } from "react-icons/io5";
import { useGetFromAPI } from "../../../../utils/hooks/useGetFromAPI";
import { useState } from "react";
import { StyledFilters, StyledFilterItem, FiltersContainer } from './ProductFilters.styled'

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

function ProductFilters({ filters = [], setFilters }) {
    const [ categoriesData, loadingCategories ] = useGetFromAPI("mocks/en-us/product-categories.json");
    const [ showFilters, setShowFilters ] = useState(true);

    function toggleFilters() {
        setShowFilters(prev => !prev);
    }

    function handleChange(item) {
        isChecked(item) ?
        setFilters(prevFilters => [ ...prevFilters.filter(filter => filter.id !== item.id) ]) :
        setFilters(prevFilters => [ ...prevFilters, item ]);
    }

    function isChecked(item) {
        return filters.some(filter => filter.id === item.id);
    }

    return ( 
        <StyledFilters>
            <FiltersContainer showFilters={showFilters}>
                <h2 onClick={toggleFilters}>
                    Filters
                    <IoChevronDown />
                </h2>
                <div className="filters">
                    <h3>By category</h3>
                    {
                        loadingCategories ? 
                            <span>Loading...</span> : 
                            categoriesData?.results?.map(category =>
                                <FilterItem
                                    key={category.id}
                                    checked={isChecked(category)}
                                    label={category.data.name}
                                    id={category.id}
                                    handleChange={() => handleChange(category)}
                                />
                            )
                    }
                </div>
            </FiltersContainer> 
        </StyledFilters>
     );
}

export default ProductFilters;
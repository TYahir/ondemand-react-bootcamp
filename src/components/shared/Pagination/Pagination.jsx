import { PaginationButton, StyledNavigation } from "./Pagination.styled";
import PropTypes from 'prop-types';

function Pagination({
        pageCount,
        activeIndex = 0,
        prevLabel = '<',
        nextLabel = '>',
        firstLabel = '<<',
        lastLabel = '>>',
    }) {
    return ( 
        <StyledNavigation>
           { activeIndex > 2 && <PaginationButton>{firstLabel}</PaginationButton> }
           { activeIndex > 1 && <PaginationButton>{prevLabel}</PaginationButton> }
            
            {[...Array(pageCount)].map((x, i) =>
                <PaginationButton key={i} isActive={i === activeIndex}>{i + 1}</PaginationButton>
            )}
            
            { activeIndex < pageCount && <PaginationButton>{nextLabel}</PaginationButton> }
            { activeIndex < pageCount - 1 && <PaginationButton>{lastLabel}</PaginationButton> }
        </StyledNavigation>
    );
}

Pagination.propTypes = {
    pageCount: PropTypes.number,
    activeIndex: PropTypes.number,
    firstLabel: PropTypes.string,
    prevLabel: PropTypes.string,
    nextLabel: PropTypes.string,
    lastLabel: PropTypes.string,
}

export default Pagination;
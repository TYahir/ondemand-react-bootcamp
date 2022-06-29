import TextField from '../TextField';
import { StyledSearch } from './SearchField.styled';

function SearchField() {
    return ( 
        <StyledSearch>
            <TextField placeholder="Search" />
        </StyledSearch>
     );
}

export default SearchField;